const avatar=require('gravatar')
let user={
    name:'NAVEEN SAGGAM',
    email:'aveensaggam@gmail.com',
    password:'12345'
}
let avatarURL=avatar.url(user.email,{
    s:400,
    r:'pg',
    d:'mm'
});
let updateduser={
    ...user,
    avatar:avatarURL
};
console.log(updateduser)