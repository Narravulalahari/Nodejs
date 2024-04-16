const readLine=require("readLine");
const rl=readLine.createInterface({
    input:process.stdin,
    output:process.stdout

});
rl.question("please enter your name",(name)=>{
    console.log("you entered",name)
})