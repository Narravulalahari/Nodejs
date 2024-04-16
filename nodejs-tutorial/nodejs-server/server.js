const http=require('http')
const hostname='127.0.0.2'
const port=5000
const server=http.createServer((request,response)=>{
    response.writeHead(200,{
        'Content-Type':'text/html'
    })
    response.end(`<h1 style="color:red">welcome to nodejs</h1>`)
})
server.listen(port,hostname,()=>{
    console.log(`NOedjs server started at http://${hostname}:${port}`)
})
