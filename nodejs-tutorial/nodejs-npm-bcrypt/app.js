const bcrypt=require('bcryptjs')
let user={
    name:'praveena',
    email:'pravee@gmail.com',
    password:'prav123'
}
let salt=bcrypt.genSaltSync(10);
let hashedpass=bcrypt.hashSync(user.password,salt)

let updateduser={
    ...user,
    password:hashedpass
};
console.log(updateduser)
//compare both p[asswords]
if(bcrypt.compareSync("jfyf",hashedpass)){
console.log('pasword is matched')
}
else{
console.log('pasword is not matched')
}