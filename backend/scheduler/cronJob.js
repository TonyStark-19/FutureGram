const cron = require("node-cron");
const Letter = require("../models/letter");
const sendEmail = require("../utils/sendEmail");

cron.schedule("0 * * * *", async () => {
  const now = new Date();

  try {
    const letters = await Letter.find({
      scheduledDate: { $lte: now },
      sent: false,
    });

    for (const letter of letters) {
      await sendEmail(letter.email, letter.content);
      letter.sent = true;
      await letter.save();
      console.log(`✅ Sent letter to ${letter.email}`);
    }
  } catch (err) {
    console.error("❌ Cron error:", err);
  }
});
