const fs=require('fs')
const path=require('path')
let writetofile=(filename,data)=>{
    fs.writeFile(filename,data,'utf-8',(err)=>{
        if(err) throw err
        console.log('data store to a file')
    })
}
module.exports={
    writetofile
}