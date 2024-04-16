const fs=require('fs')
r1=fs.readFileSync('./Files/input.txt','utf-8')
console.log(r1)
data=`data read from input:${r1}`
fs.writeFileSync('./Files/output.txt',data)