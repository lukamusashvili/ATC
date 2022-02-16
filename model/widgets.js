const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reqString = {type: String, required: true}
const reqBoolean = {type: Boolean, required: true}
const reqNumber = {type: Number, required: true}

const widgetsSchema = new Schema({
    shop: reqString, //by me
    widgetId: reqNumber, //by me
    widgetName: reqString,
    widgetStatus: reqBoolean,
    //clicks
    calculateClicksLimit: Number,
    totalClicks: Number,
    //widget Top Nav
    daysLeft: String,
    //buttons (Show Settings)
    showOnMobile: Boolean,
    showProductImage: Boolean,
    showProductName: Boolean,
    showPrice: Boolean,
    showVariants: Boolean,
    showQuantity: Boolean,
    showOutOfStocks: Boolean,
    //buttons (Border Settings)
    borderBackgroundColor: String,
    borderHeight: Number,
    borderAnimation: String,
    borderSpeedOfAnimation: String,
    showLoopAnimation: Boolean,
    //buttons (Buy Button Settings)
    buyButtonColor: String,
    buyButtonShape: String,
    buyButtonText: String,
    //Positions
    widgetPositions: String,
    barAlignment: String,
    //Timer
    showUrgencyTime: Boolean,
    timerStyle: String,
    timerChooseEvent: String,
    timerText: String,
    timerBackgroundColor: String,
    timerTextSize: Number,
    timerTextColor: String,
    timerFont: String,
    //Media
    showMediaIcons: Boolean,
    showMediaIconsFacebook: Boolean,
    showMediaIconsFacebookUrl: String,
    showMediaIconsInstagram: Boolean,
    showMediaIconsTwitter: Boolean,
    showMediaIconsGoogle: Boolean,
    showMediaIconsLinkedin: Boolean,
    showMediaIconsPinterest: Boolean,
    showMediaIconsTumblr: Boolean
},{collection: 'widgets', timestamps: true});

const widgets = mongoose.model('widgets', widgetsSchema);

module.exports = widgets;