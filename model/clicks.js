const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reqString = {type: String, required: true}
const reqBoolean = {type: Boolean, required: true}
const reqNumber = {type: Number, required: true}

const clicksSchema = new Schema({
    shop: reqString,
    widgetId: reqString,
    productPrice: String,
    
},{collection: 'clicks', timestamps: true});

const clicks = mongoose.model('clicks', clicksSchema);

module.exports = clicks;