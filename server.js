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
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const cors = require('@koa/cors');
const https = require('https');

const mongoose = require('mongoose');
const mongoPath = process.env.MongoDBPath;
const db = mongoose.connection;
const dbUpdate = {useNewUrlParser:true,useUnifiedTopology:true};
const shops = require('./model/shops.js');
const widgets = require('./model/widgets.js');

mongoose.connect(mongoPath, dbUpdate);

db.on('error', (err) => console.log('Error, DB Not Connected'));
db.on('connected', () => console.log('Connected to Mongo'));
db.on('disconnected', (err) => console.log('Mongo is disconnected'));
db.on('open', (err) => console.log('Connection Made!'));

var Production = 0; // 0 - Development; 1 - Production
var currentShops = shops.distinct('shop',{})
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
                if (currentShops[shop] === undefined) { //addShop
                    var data = 
                    {
                        shop: shop,
                        token: accessToken,
                        numberOfWidgets: 0
                    }
                    insertShop(data)
                    console.log("03 -- "+shop+" -- "+currentShops)
                }
                else{
                    console.log("04 -- "+shop+" -- "+currentShops)
                }
                ctx.redirect(`/home?shop=${shop}&host=${host}`)
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
        const shop = ctx.query.shop;
        currentShops = await shops.distinct('shop',{})

        if (currentShops[shop] === undefined) {
            console.log("01 -- "+shop+" -- "+currentShops)
            ctx.redirect(`/auth?shop=${shop}`);
        } else {
            console.log("02 -- "+shop+" -- "+currentShops)
            await handleRequest(ctx);
        }
    });

    router.get("/home", async (ctx) => {
        await handleRequest(ctx);
    });
//#endregion
//#region ROUTERS
    router.post('/widget', koaBody(), async (ctx, next) => {
        const shop = ctx.query.shop;
        var widgetProperties = JSON.parse(ctx.request.body);
        insertWidget(shop,widgetProperties);
        ctx.body = "Success"
        await next();
    })
//#endregion
//#region MONGODB
//#region INSERT SHOP
    async function insertShop(shopData){
        try {
            await shops.create(shopData, (err,result) => {
                console.log('error ' + err);
                console.log('result ' + result);
            })
        } catch (err) {
            console.log(err);
        }
    }
//#endregion
//#region INSERT WIDGET
    async function insertWidget(shop,widgetData){
        console.log(shop)
        //get the number of widgets for the shop
        currentWidgetsNumber = await shops.countDocuments('widgetId',{shop: shop})
        try {
            console.log(currentWidgetsNumber)
            console.log(widgetData)
            widgetData.shop = 'meowShop'
            widgetData.widgetStatus = true
            widgetData.widgetId = currentWidgetsNumber + 1
            console.log(currentWidgetsNumber)
            console.log(widgetData)
            await widgets.create(widgetData, (err,result) => {
                console.log('error ' + err);
                console.log('result ' + result);
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
    router.get("(.*)", verifyRequest(), handleRequest);

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
            key: fs.readFileSync(path.join(__dirname, 'cert/privkey.pem')),
            ca: fs.readFileSync(path.join(__dirname, 'cert/chain.pem')),
            cert: fs.readFileSync(path.join(__dirname, 'cert/cert.pem'))
        }
        https.createServer(options, server.callback()).listen(port, () => console.log(`> Ready on https://localhost:${port}`));
    }
})
//#endregion