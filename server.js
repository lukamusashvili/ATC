//#region IMPORTING
require('isomorphic-fetch');
const dotenv = require('dotenv'); dotenv.config();
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth')
const { default: Shopify, ApiVersion } = require('@shopify/shopify-api');
const Router = require('koa-router');
const koaBody = require('koa-body');
const serve = require('koa-static');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const cors = require('@koa/cors');
const https = require('https');
const fs = require('fs');

const mongoose = require('mongoose');
const mongoPath = process.env.MongoDBPath;
const db = mongoose.connection;
const dbUpdate = {useNewUrlParser:true,useUnifiedTopology:true};
const shops = require('./model/shops.js');
const widgets = require('./model/widgets.js');
const clicks = require('./model/clicks.js');

mongoose.connect(mongoPath, dbUpdate);

db.on('error', (err) => console.log('Error, DB Not Connected'));
db.on('connected', () => console.log('Connected to Mongo'));
db.on('disconnected', (err) => console.log('Mongo is disconnected'));
db.on('open', (err) => console.log('Connection Made!'));

var Production = 0; // 0 - Development; 1 - Production
var currentShops = [];
//#endregion
//#region SHOPIFY INITIALIZE
Shopify.Context.initialize({
    API_KEY: process.env.SHOPIFY_API_KEY,
    API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
    SCOPES: process.env.SHOPIFY_API_SCOPES.split(","),
    HOST_NAME: process.env.SHOPIFY_APP_URL.replace(/https:\/\//, ""),
    API_VERSION: ApiVersion.July21,
    IS_EMBEDDED_APP: true,
    SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});
//#endregion
//#region SERVER CONFIG
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
//#endregion
//#region APP CONFIG & WEBHOOKS
app.prepare().then(() => {
    const server = new Koa();
    server.use(cors());
    const router = new Router();
    server.keys = [Shopify.Context.API_SECRET_KEY];
    server.use(
        createShopifyAuth({
            accessMode: 'offline',
            async afterAuth(ctx) {
                const { shop, accessToken } = ctx.state.shopify;
                const host = ctx.query.host;
                currentShops = await shops.distinct('shop',{})
                console.log("00 -- "+shop+" -- "+accessToken)
                if (currentShops.includes(shop)) { //addShop
                    console.log("03 -- "+shop+" -- "+currentShops)
                }
                else{
                    var data = 
                    {
                        shop: shop,
                        token: accessToken,
                        plan: "Test"
                    }
                    insertShop(data)
                    console.log("04 -- "+shop+" -- "+currentShops+" -- "+data)
                }
                ctx.redirect(`/?shop=${shop}&host=${host}`)
            }
        })
    )
//#endregion
//#region HANDLER & INDEX
    const handleRequest = async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
        ctx.res.statusCode = 200;
    };

    router.get("/", async (ctx) => {
        var shop = ctx.query.shop
        if(Production == 0){
            shop = 'testShopName'
        }
        console.log("came to index and shop is "+shop)
        currentShops = await shops.distinct('shop',{})
    
        if (currentShops.includes(shop)) {
            console.log("01 -- "+shop+" -- "+currentShops)
            await handleRequest(ctx);
        } else {
            console.log("02 -- "+shop+" -- "+currentShops)
            ctx.redirect(`/auth?shop=${shop}`);
        }
    });

    router.get("/buttons", async (ctx) => {
        var shop = ctx.query.shop
        if(Production == 0){
            shop = 'testShopName'
        }
        console.log("came to buttons and shop is "+shop)
        await handleRequest(ctx);
    });

    router.get("/buttons/create", async (ctx) => {
        var shop = ctx.query.shop
        if(Production == 0){
            shop = 'testShopName'
        }
        console.log("came to buttons/create and shop is "+shop)
        await handleRequest(ctx);
    });

    router.get("/analytics", async (ctx) => {
        var shop = ctx.query.shop
        if(Production == 0){
            shop = 'testShopName'
        }
        console.log("came to analytics and shop is "+shop)
        await handleRequest(ctx);
    });
//#endregion
//#region ROUTERS
    router.post('/widgets', async (ctx, next) => {
        var shop = ctx.query.shop
        if(Production == 0){
            shop = 'testShopName'
        }
        console.log("requested to widgets (post) and shop is "+shop)
        var currentWidgets = await widgets.find({shop: shop},'-_id widgetId widgetName widgetStatus')
        console.log(currentWidgets)
        ctx.body = currentWidgets
        await next();
    })
    router.post('/getwidget', koaBody(), async (ctx, next) => {
        var shop = ctx.query.shop
        if(Production == 0){
            shop = 'testShopName'
        }
        console.log("requested to getwidget (post) and shop is "+shop)
        var widgetId = ctx.request.body
        var theWidgetProperties = await widgets.findOne({ shop: shop, widgetId: widgetId }, '-_id -createdAt -updatedAt -__v').exec();
        ctx.body = theWidgetProperties
        await next();
    })
    router.post('/widget', koaBody(), async (ctx, next) => {
        var shop = ctx.query.shop
        if(Production == 0){
            shop = 'testShopName'
        }
        console.log("requested to widget (post) and shop is "+shop)
        var widgetProperties = JSON.parse(ctx.request.body);
        insertWidget(shop,widgetProperties);
        ctx.body = "Success"
        await next();
    })
    router.put('/widget', koaBody(), async (ctx, next) => {
        var shop = ctx.query.shop
        if(Production == 0){
            shop = 'testShopName'
        }
        console.log("requested to widget (put) and shop is "+shop)
        var widgetProperties = ctx.request.body
        updateWidget(shop,widgetProperties);
        ctx.body = "Success"
        await next();
    })
    router.post('/widgetdel', koaBody(), async (ctx, next) => {
        var shop = ctx.query.shop
        if(Production == 0){
            shop = 'testShopName'
        }
        console.log("requested to widgetdel (post) and shop is "+shop)
        var widgetId = ctx.request.body
        console.log(widgetId)
        deleteWidget(shop,widgetId);
        ctx.body = widgetId
        await next();
    })
    router.put('/widgetstatus', koaBody(), async (ctx, next) => {
        var shop = ctx.query.shop
        if(Production == 0){
            shop = 'testShopName'
        }
        console.log("requested to widgetstatus (put) and shop is "+shop)
        var widgetProperties = ctx.request.body
        updateWidgetStatus(shop,widgetProperties);
        ctx.body = widgetProperties
        await next();
    })
    router.post('/enabledwidget', koaBody(), async (ctx, next) => {
        var shop = ctx.query.shop
        if(Production == 0){
            shop = 'testShopName'
        }
        console.log("requested to enabledwidget (post) and shop is "+shop)
        var theWidgetProperties = await widgets.findOne({ shop: shop, widgetStatus: true }, '-_id -createdAt -updatedAt -__v')
        ctx.body = theWidgetProperties
        await next();
    })
    router.post('/click', koaBody(), async (ctx, next) => {
        var shop = ctx.request.body.shop
        if(Production == 0){
            shop = 'testShopName'
        }
        console.log("requested to click (post) and shop is "+shop)
        var clickProperties = ctx.request.body
        console.log(clickProperties)
        insertClick(clickProperties);
        ctx.body = clickProperties
        await next();
    })
    router.post('/totalclicks', async (ctx, next) => {
        var shop = ctx.query.shop
        if(Production == 0){
            shop = 'testShopName'
        }
        console.log("requested to totalclicks (post) and shop is "+shop)
        const totalClicks = await clicks.countDocuments({shop: shop})
        console.log(shop)
        console.log(typeof(shop))
        console.log(typeof("shop"))
        const totalWidgets = await widgets.countDocuments({shop: shop})
        const shopPlan = await shops.findOne({ shop: shop}, 'token')
        const data =
        {
            "totalClicks":totalClicks,
            "totalWidgets":totalWidgets,
            "shopPlan":shopPlan
        }
        ctx.body = data
        await next();
    })
    router.post('/widgetsclicks', async (ctx, next) => {
        var shop = ctx.query.shop
        if(Production == 0){
            shop = 'testShopName'
        }
        console.log("requested to widgetsclicks (post) and shop is "+shop)
        const widgetsClicks = await clicks.aggregate([{$match:{shop:shop}},{$group:{_id:"$widgetId",count:{$sum:1}}}])
        ctx.body = widgetsClicks
        await next();
    })
    router.post('/widgetsanalytics', async (ctx, next) => {
        var shop = ctx.query.shop
        if(Production == 0){
            shop = 'testShopName'
        }
        console.log("requested to widgetsanalytics (post) and shop is "+shop)
        const widgetsAnalytics = await widgets.find({shop: shop},'-_id widgetId widgetName pagesToShow widgetStatus created_at')
        ctx.body = widgetsAnalytics
        await next();
    })
//#endregion
//#region MONGODB
//#region INSERT SHOP
    async function insertShop(shopData){
        try {
            await shops.create(shopData, (err,result) => {
                if(err){
                    console.log('error ' + err); 
                }
                else{
                    console.log('result ' + result);
                }
            })
        } catch (err) {
            console.log(err);
        }
    }
//#endregion
//#region INSERT WIDGET
    async function insertWidget(shop,widgetData){
        widgetData.shop = shop
        //get the number of widgets for the shop
        try{
            await widgets.findOne({shop: shop}).sort('-widgetId').exec(function(err, item){
                try{
                    var theLastWidgetId = item.widgetId
                    widgetData.widgetId = theLastWidgetId + 1
                    insertNewWidget(widgetData)
                }
                catch{
                    var theLastWidgetId = 0;
                    widgetData.widgetId = theLastWidgetId + 1
                    insertNewWidget(widgetData)
                }
            })
        }
        catch{
            var theLastWidgetId = 0;
            widgetData.widgetId = theLastWidgetId + 1
            insertNewWidget(widgetData)
        }
    }
    async function insertNewWidget(widgetData){
        try {
            await widgets.create(widgetData, (err,result) => {
                if(err){
                    console.log('error ' + err); 
                }
                else{
                    console.log('result ' + result);
                }
            })
        } catch (err) {
            console.log(err);
        }
    }
//#endregion
//#region UPDATE WIDGET
    async function updateWidget(shop,widgetData){
        widgetData.shop = shop
        try {
            await widgets.replaceOne({ shop: shop, widgetId: widgetData.widgetId }, widgetData, (err,result) => {
                if(err){
                    console.log('error ' + err); 
                }
                else{
                    console.log('result ' + result);
                }
            })
        } catch (err) {
            console.log(err);
        }
    }
//#endregion
//#region UPDATE WIDGETSTATUS
    async function updateWidgetStatus(shop,widgetData){
        try {
            if(typeof(widgetData)==="string"){
                var objWidgetData = JSON.parse(widgetData)
            }
            else{
                var objWidgetData = widgetData
            }
            const widgetStatusOff = await widgets.updateOne({ shop: shop, widgetStatus: true }, {$set: {widgetStatus: false}})
            console.log('result ' + JSON.stringify(widgetStatusOff));
            updateWidgetStatusOn()
        } catch (err) {
            console.log(err);
        }
    
        async function updateWidgetStatusOn(){
            try {
                console.log(shop,objWidgetData.widgetId,objWidgetData.widgetStatus)
                const widgetStatusOn = await widgets.updateOne({ shop: shop, widgetId: objWidgetData.widgetId }, {$set:{widgetStatus: objWidgetData.widgetStatus}})
                console.log('result ' + JSON.stringify(widgetStatusOn));
            } catch (err) {
                console.log(err);
            }
        }
    }
//#endregion
//#region DELETE WIDGET
    async function deleteWidget(shop,widgetId){
        try {
            await widgets.deleteOne({ shop: shop, widgetId: widgetId }), (err,result) => {
                if(err){
                    console.log('error ' + err); 
                }
                else{
                    console.log('result ' + result);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }
//#endregion
//#region INSERT CLICK
    async function insertClick(clickProperties){
        try {
            if(typeof(clickProperties)==="string"){
                var objclickProperties = JSON.parse(clickProperties)
            }
            else{
                var objclickProperties = clickProperties
            }
            await clicks.create(objclickProperties, (err,result) => {
                if(err){
                    console.log('error ' + err); 
                }
                else{
                    console.log('result ' + result);
                }
            })
        } catch (err) {
            console.log(err);
        }
    }
//#endregion
//#endregion
//#region SERVER OPTIONS
    router.get("(/_next/static/.*)", handleRequest);
    router.get("/_next/webpack-hmr", handleRequest);
    if(Production == 1){
        router.get("(.*)", handleRequest);
    }

    server.use(serve('./public'));
    server.use(router.allowedMethods());
    server.use(router.routes());
    if(Production == 0){
        console.log("It's a Development Server");
        server.listen(port, () => {
            console.log(`> Ready on http://localhost:${port}`);
        });
    }
    else{
        console.log("It's a Production Server");
        const options = {
            key: fs.readFileSync('/etc/letsencrypt/live/dev.atc.podsolutionshopify.com/privkey.pem'),
            ca: fs.readFileSync('/etc/letsencrypt/live/dev.atc.podsolutionshopify.com/chain.pem'),
            cert: fs.readFileSync('/etc/letsencrypt/live/dev.atc.podsolutionshopify.com/cert.pem')
        }
        https.createServer(options, server.callback()).listen(port, () => console.log(`> Ready on https://localhost:${port}`));
    }
})
//#endregion