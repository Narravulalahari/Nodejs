const http=require('http')
const server=http.createServer((req,res)=>{
    res.end("hello from the server")
    console.log("A new requestis received")
    console.log(req)

})
server.listen(8000)