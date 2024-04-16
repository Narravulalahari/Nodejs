// const fs=require('fs')
// //synchronous way
// let filecontent=fs.readFileSync("./message.txt",'utf-8')
// console.log(filecontent)
// let newfile="Hello this is a new file content"
// fs.writeFileSync('./data.txt',newfile)
// console.log('data is written to file')
//async file
// const fs=require('fs')
// fs.readFile('./message.txt','utf-8',(err,data) => {
//     if (err) throw err;
//     console.log(data)
//     fs.writeFile('./hello1.txt',data,'utf-8',(err)=>{
//         if(err) throw err
//         console.log('data is written to the file')
//     })

// })
// console.log("this is fs outside the function")
//json files
const fs=require('fs')
let employees=[{"id":1,"first_name":"Sofie","last_name":"Matteini","email":"smatteini0@people.com.cn","gender":"Female","ip_address":"142.90.47.230"},
{"id":2,"first_name":"Darill","last_name":"Whitters","email":"dwhitters1@kickstarter.com","gender":"Male","ip_address":"3.163.87.68"},
{"id":3,"first_name":"Bale","last_name":"Hardwicke","email":"bhardwicke2@usa.gov","gender":"Male","ip_address":"53.22.205.181"},
{"id":4,"first_name":"Jacinda","last_name":"Hurran","email":"jhurran3@icq.com","gender":"Female","ip_address":"163.252.71.222"},
{"id":5,"first_name":"Forster","last_name":"Margrie","email":"fmargrie4@deliciousdays.com","gender":"Male","ip_address":"79.174.188.81"},
{"id":6,"first_name":"Patrizia","last_name":"Churchlow","email":"pchurchlow5@cloudflare.com","gender":"Female","ip_address":"17.61.19.173"},
{"id":7,"first_name":"Avrom","last_name":"Biggs","email":"abiggs6@java.com","gender":"Male","ip_address":"95.144.225.218"},
{"id":8,"first_name":"Orelle","last_name":"Ringer","email":"oringer7@gizmodo.com","gender":"Female","ip_address":"175.179.212.76"},
{"id":9,"first_name":"Fannie","last_name":"Defau","email":"fdefau8@mashable.com","gender":"Female","ip_address":"220.171.111.87"},
{"id":10,"first_name":"Dion","last_name":"Sains","email":"dsains9@rakuten.co.jp","gender":"Male","ip_address":"139.1.165.213"}]
fs.writeFile('employees.json',JSON.stringify(employees),(err)=>{
    if (err) throw err;
    console.log('data is written to file')
})