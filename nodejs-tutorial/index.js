// console.log("this is nodejs tutorial for begginers")
// console.log("this is first tutorial on nodejs")
// console.log("we will cover nodejs with command line")
// // process.exit(1);
// // process.exitCode=1;
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nlahari1306@gmail.com',
    pass: 'Lahari@136'
  }
});

var mailOptions = {
  from: 'nlahari1306@gmail.com',
  to: 'laharinarravula3141@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions,(error, info)=>{
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});