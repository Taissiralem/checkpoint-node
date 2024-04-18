import nodemailer from "nodemailer";
export const sendEmail = (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailoptions = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.text,
  };

  transporter.sendMail(mailoptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.json({ message: "email sent" });
};
