const express=require('express')
const app=express()
const mongoclient=require('mongodb').MongoClient
const fs=require('fs')

const url = 'mongodb://localhost:27017';
app.get('/users',function(request,response){
    const users=fs.readFile("./users.json",()=>{
        response.send(users)
    })
    // response.send("praveena HELLO")
   
    console.log("Hello world")
})
// app.get('/products',function(request,response){
//     mongoclient.connect('mongodb://localhost:27017',(err,db)=>{
//         if(err) throw err
//         console.log("database connected")
//         db.close()
//     })

// })
//web xesrver
app.listen(3005)