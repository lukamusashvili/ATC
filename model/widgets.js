const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reqString = {type: String, required: true}
const reqBoolean = {type: Boolean, required: true}
const reqNumber = {type: Number, required: true}

const widgetsSchema = new Schema({
    shop: reqString, //by me
    widgetId: reqNumber, //by me
    widgetName: reqString,
    widgetStatus: reqBoolean, //true = enabled
    generalStyle: String,
    pagesToShow: Array,
    goToCheckout: Boolean,
    calculateClicks: Boolean,
    //widget Top Nav
    daysLeft: String,
    //buttons (Show Settings)
    showStatusDesktop: Boolean,
    showStatusMobile: Boolean,
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
    timerDate: String,
    timerTime: String,
    timerText: String,
    timerBackgroundColor: String,
    timerTextSize: Number,
    timerTextColor: String,
    timerFont: String,
    //Media
    showMediaIcons: Boolean,
    showMediaIconsFacebookUrl: String,
    showMediaIconsInstagramUrl: String,
    showMediaIconsTwitterUrl: String,
    showMediaIconsGoogleUrl: String,
    showMediaIconsLinkedinUrl: String,
    showMediaIconsPinterestUrl: String,
    showMediaIconsTumblrUrl: String
},{collection: 'widgets', timestamps: true});

const widgets = mongoose.model('widgets', widgetsSchema);

module.exports = widgets;