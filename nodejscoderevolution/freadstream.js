const fs=require('fs')
const http=require('http')
const server=http.createServer((req,res)=>{
    console.log("serevr request is done")
})
server.listen(8002)
// server.on('request',(req,res)=>{
//     fs.readFile('./Files/largefile.txt',(err,data)=>{
//         if(err){
//             console.log(err)
//         }
//         res.end(data)
//     })
// })
server.on('request',(req,res)=>{
    let rs=fs.createReadStream('./Files/largefile.txt')
    rs.on('data',(chunk)=>{
        res.write(chunk)
        res.end();
    })
    rs.on('error',(error)=>{
        res.end(error)
    })
})