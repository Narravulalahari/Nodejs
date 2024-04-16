const jwt=require('jsonwebtoken')
let user={
    id:"abcd-101-sfsd-45678",
    name:"lahari",
    email:"lahari@gmail.com"
};
let payload={
    id:user.id,
    name:user.name
}
let secretkey='sshhhs'
let token=jwt.sign(payload,secretkey,{expiresIn:36000});
console.log(token);
jwt.verify(token,secretkey,(err,decoded)=>{
    if(err) throw err
    console.log(decoded)
})
