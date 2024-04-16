const fs=require('fs')
const path=require('path')
let getallemp=(callbac)=>{
    fs.readFile(path.join(__dirname,'employees.json'),'utf-8',(err,data)=>{
        if(err) throw err
        let employee=JSON.parse(data)
        callbac(employee)
    })
}
module.exports={
    getallemp
}