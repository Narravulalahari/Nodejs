const dbconnect=require('./mongodb')
// console.log(dbconnect())
// dbconnect().then((resp)=>{
//   resp.find({firstName:'Lahri'}).toArray().then((data)=>{
//     console.log(data)
//   })
// })
const main=async ()=>{
    let data= await dbconnect();
    data=await data.find().toArray()

    console.log(data)
}
main()