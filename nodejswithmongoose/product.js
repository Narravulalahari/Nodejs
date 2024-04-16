const mongoose=require('mongoose')
const productschema=mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
});
module.exports=mongoose.model('products',productschema);

