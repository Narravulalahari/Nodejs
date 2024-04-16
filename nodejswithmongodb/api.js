const dbconnect=require('./mongodb')
const express=require('express')
const app=express()
const mongodb=require('mongodb')
app.use(express.json())
app.get('/',async (req,res)=>{
    let data=await dbconnect();
    data=await data.find().toArray()
    res.send(data)
})
app.post('/',async (req,res)=>{
    let data=await dbconnect();
    let result=await data.insertOne(req.body)
    res.send(result)
})
app.put('/', async (req, res) => {
    let data = await dbconnect();
    let filter = { firstName: req.body.firstName }; // Constructing the filter
    let update = { $set: req.body }; // Using $set to update fields
    let result = await data.updateOne(filter, update); // Correct usage of updateOne
    res.send(result);
})
app.delete('/:id', async (req, res) => {
    console.log(req.params.id)
    const data=await dbconnect()
    const result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    console.log(result)
});

app.listen(5001)