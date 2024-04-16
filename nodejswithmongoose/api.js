const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/e-com')
const productschema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});
const main=async()=>{
    const product=mongoose.model('products',productschema)
    let data=new product({
        name:'liquid',
        price:200,
        brand:'maxx',
        category:'Liquid'
    })
    const result=await data.save()
    console.log(result)
}
const updateindb=async()=>{
    const product=mongoose.model('products',productschema)
    let data=await product.updateOne(
        {name:'liquid'},
        {$set:{price:600}}
    )
    console.log(data)
}
/*main()*/
updateindb()
const deletedb=async()=>{
    const product=mongoose.model('products',productschema)
    let data=await product.deleteOne({name:'liquid'})
    console.log(data)
}
deletedb()
const findindb=async()=>{
    const product=mongoose.model('products',productschema)
    let data=await product.find({})
    console.log(data)
}
findindb()