const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/e-com");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
})

const main = async () => {
    const Product = mongoose.model('prectice', productSchema)
    let data = new Product({
        name: "por90",
        price: 5225
    });
    let result = await data.save();
    console.log(result);
}
//   main();
const updateIndb = async () => {
    const product = mongoose.model('prectice', productSchema);
    let data = await product.updateMany(
        { name: "m90" },
        { $set: { name: "max80", price: 2552 } }
    )
    console.log(data);
}
// updateIndb()

const deleteIndb = async () => {
    const product = mongoose.model('prectice', productSchema);
    let data = await product.deleteMany(
        { name: "max80" }
    )
    console.log(data);
}
// deleteIndb()
const finddb = async () => {
    const product = mongoose.model('prectice', productSchema);
    let data = await product.find(
        { name: "max80" }
    )
    console.log(data);
}
finddb()