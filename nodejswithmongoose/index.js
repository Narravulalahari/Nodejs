const mongoose=require('mongoose')
const main=async()=>{
    await mongoose.connect('mongodb://localhost:27017/e-com')
    const productschema=new mongoose.Schema({
        name:String
    });
    const product=mongoose.model('products',productschema)
    let data=new product({name:'laha',price:200})
    const result=await data.save();
    console.log(result)
}
main()