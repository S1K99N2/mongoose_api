const mongoose=require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand:String,
    cetogry:String
});

module.exports = mongoose.model('prectice',productSchema);