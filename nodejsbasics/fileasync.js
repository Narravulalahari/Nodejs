const fs=require('fs')
fs.readFile('./Files/input.txt','utf-8',(err,data1)=>{
    console.log(data1)
    fs.readFile(`./Files/${data1}`,'utf-8',(err,data2)=>{
        console.log(err)
        fs.writeFile('./Files/output.txt',data1,(err,data)=>{
            console.log(data)
        })
    })
})