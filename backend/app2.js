const express = require('express');
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;


async function sendEmail() {
    try{
        const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "533f6b192b7799",
              pass: "0568fbfa79e7e5"
            }
        });
        
          let info = await transporter.sendMail({
          from: 'pm495949@gmail.com', // sender address
          to: "bar@example.com, baz@example.com", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        });

    }
    catch(error){

    }
}

sendEmail();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });