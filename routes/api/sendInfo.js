const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/message", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "housematchers.no.reply@gmail.com",
      pass: "WhenWillSemEnd",
    },
  });

  var mailOptions = {
    from: "housematchers.no.reply@gmail.com",
    to: "housematchers.no.reply@gmail.com",
    subject: "pls work",
    text: "hahaha",
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) res.send("Error Occurred");
    else res.send("Success");
  });
});

module.exports = router;
