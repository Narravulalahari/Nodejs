const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017/mydb";

async function getdata() {
  try {
    const client = await MongoClient.connect(url);
    const dbo = client.db("mydb");
    
    // Create collection asynchronously
    await dbo.createCollection("customers");
    
    console.log("Collection created!");
    
    // Close the client connection
    client.close();
  } catch (err) {
    console.error(err);
  }
}

getdata();