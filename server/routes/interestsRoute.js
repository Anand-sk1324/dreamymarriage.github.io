const express = require("express");
const router = express.Router();
const InterestModel = require('../models/interestModel')
const nodemailer = require("nodemailer");

router.get('/', async (req, res) => {
  try {
    const allInterests = await InterestModel.find();
    res.status(201).json(allInterests)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }

});
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const interest = await InterestModel.findById(id);
    res.status(201).json(interest)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }

});
router.post('/', async (req, res) => {
  const interest = new InterestModel({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    msg: req.body.msg,
    plans: req.body.plans,
    foods: req.body.foods,
    photography: req.body.photography,
    entry: req.body.entry,
    etc: req.body.etc,
  })

  try {
    const newInterest = await interest.save()
    res.status(201).json(newInterest)
    sendMail('dreamyweddy@gmail.com', "New Customer", JSON.stringify(newInterest))

  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await InterestModel.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});


router.get('/accept/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const interest = await InterestModel.findById(id);
    let mailSub = "Thanks for Contacting";
    let mailBody = "Respected " + interest.name + ", We are reviewing your request and will get in touch soon. Thank you."
    sendMail(interest.email, mailSub, mailBody)
    res.status(201).json(interest)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }

});

router.get('/reject/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const interest = await InterestModel.findById(id);
    let mailSub = "Thanks for Contacting";
    let mailBody = "Respected " + interest.name + ", We are regret to inform that we are unable to take your wedding responsibilty in hand for now. still, thanks for contacting us"
    sendMail(interest.email, mailSub, mailBody)
    res.status(201).json(interest)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }

});

function sendMail(mailTo, mailSub, mailBody) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dreamyweddy@gmail.com',
      pass: 'shza sjef fwbr yyka'
    }
  });

  var mailOptions = {
    from: 'dreamyweddy@gmail.com',
    to: mailTo,
    subject: mailSub,
    text: mailBody
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
module.exports = router