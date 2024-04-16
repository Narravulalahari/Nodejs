const path=require('path')
const fs=require('fs')
//read from employee.json from /employees/employess.json
fs.readFile(path.join(__dirname,'database','employees','employees.json'),'utf-8',(err,data)=>{
    if(err)throw err
    customers=JSON.parse(data)
    console.log(customers)
    console.log(JSON.stringify(customers))
    fs.writeFile(path.join(__dirname,'util','cust.json'),JSON.stringify(data),(err)=>{
        if(err) throw err
        console.log("data is written to file")
    })
});

console.log(path.join(__dirname,'database','employees','employees.json'))