const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reqString = {type: String, required: true}
const reqNumber = {type: Number, required: true}

const clicksSchema = new Schema({
    shop: reqString,
    widgetId: reqNumber,
    productPrice: reqNumber,
    currency: reqString
},{collection: 'clicks', timestamps: true});

const clicks = mongoose.model('clicks', clicksSchema);

module.exports = clicks;