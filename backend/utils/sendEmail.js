const nodemailer = require("nodemailer");

<<<<<<< HEAD
const sendEmail = async (to, content, name, animePic) => {
=======
const sendEmail = async (to, content) => {
>>>>>>> abecdfd8d1c535b0eb7dfa9daea6a2158dc1b5d6
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Dear Future Me" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your Letter from the Past 💌",
    text: content,
  });
};

<<<<<<< HEAD
module.exports = sendEmail;
=======
module.exports = sendEmail;
>>>>>>> abecdfd8d1c535b0eb7dfa9daea6a2158dc1b5d6
