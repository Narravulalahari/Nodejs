const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017/mydb";

async function getdata() {
  try {
    const client = await MongoClient.connect(url);
    const dbo = client.db("mydb");
    
    // Create collection asynchronously
    const myobj = { name: "Company Inc", address: "Highway 37" };
    const result = await dbo.collection("customers").insertOne(myobj);
    console.log("1 document inserted");

    // Close the client connection
    client.close();
  } catch (err) {
    console.error(err);
  }
}

getdata();
