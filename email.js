var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'amaraymen5@gmail.com',
    pass: 'cszc zzfc svdm tcth'
  }
});

var mailOptions = {
  from: 'amaraymen5@gmail.com',
  to: 'amaraymen111@gmail.com',
  subject: 'Sending Email using Node.js',
  text: '<b>hello</b>'
};
setInterval(()=>{
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });

},2000)
