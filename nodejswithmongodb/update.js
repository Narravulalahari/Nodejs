const dbconnect=require('./mongodb')
const updateData=async ()=>{
    let data=await dbconnect();
    let result=await data.updateOne({age:18},{$set:{firstName:'laharsai'}})
    console.log(result)
}
updateData()