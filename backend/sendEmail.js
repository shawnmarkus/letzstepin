import nodemailer from "nodemailer";
// var smtpTransport = require("nodemailer-smtp-transport");

const sendEmail = (req, res) => {
  console.log(
    "the recipient email is ===> " +
      "mailerservice321@gmail.com" +
      req.body.name
  );

  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: "mailerservice321@gmail.com",
      pass: "qqicogkjjpnobuee",
    },
  });

  const text = `<div> <p>A Client named <b><i>${req.body.name}</i></b> with business type ${req.body.businessType} is trying to reach us.</p>
  <p>Contact no: ${req.body.phone}</p> 
  <p>From city: ${req.body.city}
  </p></div>`;

  const mailOptions = {
    from: req.body.email,
    to: "letzstepin@gmail.com",
    subject: "Contact us",
    html: text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log("err from email service ===> ", err);
      res.status(410).json({
        message: "EMAIL_FAILED",
      });
    } else {
      console.log("email sent success info ===>", info);
      res.status(200).json({
        message: "EMAIL_SEND",
      });
    }
  });
};

export { sendEmail };
