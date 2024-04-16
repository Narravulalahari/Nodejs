const http=require('http')
const fs=require('fs')
const path=require('path')
const router=require('./rotes/maproutes')
const hostname='127.0.0.2'
const port=5002
const server=http.createServer((request,response)=>{
    response.writeHead(200,{
        'Content-Type':'text/html'
    })
    router.maproutes(request,response)
   
})
server.listen(port,hostname,()=>{
    console.log(`NOedjs server started at http://${hostname}:${port}`)
})