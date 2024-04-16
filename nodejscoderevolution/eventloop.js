const fs=require('fs')
console.log("program has started")
//1st phase of event llooop
// setTimeout(()=>{
//    console.log("Timer callback executed")
// },0)
// //third phase of event loop
// setImmediate(()=>{
//     console.log("set immediate caalback executed")
// })
console.log("program has executed")
fs.readFile('./Files/input.txt',()=>{
    console.log('file read complete')
    setTimeout(()=>{
        console.log("Timer callback executed")
     },0)
     //third phase of event loop
     setImmediate(()=>{
         console.log("set immediate caalback executed")
     })
     process.nextTick(()=>{
        console.log("Pocess nexttick is executed")
     })
})
