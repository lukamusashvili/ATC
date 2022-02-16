const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reqString = {type: String, required: true}
const reqBoolean = {type: Boolean, required: true}
const reqNumber = {type: Number, required: true}

const shopsSchema = new Schema({
    shop: reqString,
    token: reqString,
    myWidgets: Number,

},{collection: 'shops', timestamps: true});

const shops = mongoose.model('shops', shopsSchema);

module.exports = shops;