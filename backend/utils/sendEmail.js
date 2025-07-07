const nodemailer = require("nodemailer");

const sendEmail = async (to, content) => {
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

module.exports = sendEmail;
