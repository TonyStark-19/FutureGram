const nodemailer = require("nodemailer");

const sendEmail = async (to, content, name, animePic) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlMessage = `
    <div style="font-family: Poppins, sans-serif; padding: 20px; background: #fff0f5; color: #4b0082; border-radius: 12px;">
      <h2>Hi ${name} 💌</h2>
      <p>Here's your message from the past:</p>
      <blockquote style="font-size: 1.2em; background: #fff; padding: 15px; border-left: 5px solid #f080e7;">
        ${content}
      </blockquote>
      <img src="${animePic}" alt="Anime Pic" style="max-width: 200px; margin-top: 20px; border-radius: 10px;" />
      <p style="margin-top: 20px;">With love,<br><strong>Your Past Self 💖</strong></p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Dear Future Me" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your Letter from the Past 💌",
    text: `${name},\n\n${content}\n\n[Anime Image: ${animePic}]`,
    html: htmlMessage,
  });
};

module.exports = sendEmail;