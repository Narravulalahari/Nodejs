const {MongoClient}=require('mongodb')
const url='mongodb://localhost:27017';
const dbname='test'

async function dbconnect()
{
    let result=await MongoClient.connect(url)
    db=result.db(dbname);
    return db.collection('students')
    // let data= await collection.find({}).toArray()
    // console.log(data)

}
module.exports=dbconnect;