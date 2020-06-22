var express = require("express");
var nodemailer = require("nodemailer");
const creds = require("./config");
const port = process.env.PORT || 5000;

var transport = {
  service: "gmail",
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
  debug: true, // show debug output
  logger: true, // log information in console
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

const app = express();
app.use(express.json());
app.post("/contactus", (req, res, next) => {
  var name = req.body.name;
  var phone = req.body.phone_number;
  var email = req.body.email;
  var message = req.body.message;
  var subscription = req.body.email_subscription ? "Yes" : "No";
  var content = `Name: ${name} \nPhone: ${phone} \nEmail: ${email} \nMessage: ${message} \nEmail subscription: ${subscription}`;

  var mail = {
    from: email,
    to: transport.auth.user,
    subject: `ImaginAble Solutions New Message From ${name}`,
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        error: err,
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });

      transporter.sendMail(
        {
          from: transport.auth.user,
          to: email,
          subject: "Submission was successful",
          text: `Thank you for contacting ImaginAble Solutions! Your email has been received and is being reviewed by our support staff!\nWe will be in touch with you as soon as possible! Thank you so much for your patience, and we look forward to helping you provide someone you love with Guided Hands™!\n\nAll the best,\nThe ImaginAble Solutions Team\n\nForm details\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}\nEmail subscription: ${subscription}`,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Message sent: " + info.response);
          }
        }
      );
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
