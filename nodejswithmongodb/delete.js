const dbconnect=require('./mongodb')
const deletedata=async ()=>{
   let data=await dbconnect()
   let result=await data.deleteMany({firstName:'venni'})
   console.log(result)
}
deletedata()