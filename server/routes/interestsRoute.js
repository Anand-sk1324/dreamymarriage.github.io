const express = require("express");
const router = express.Router();
const InterestModel = require('../models/interestModel')
const nodemailer = require("nodemailer");

router.get('/', async (req, res) => {
  try{
    const allInterests = await InterestModel.find();
    res.status(201).json(allInterests)
  }catch(err){
    res.status(400).json({message: err.message})
  }

});

router.post('/', async (req, res) => {
    const interest = new InterestModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        msg: req.body.msg
    })

    try {
        const newInterest = await interest.save()
        res.status(201).json(newInterest)
        sendMail(newInterest)
        
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

function sendMail(newInterest){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dreamyweddy@gmail.com',
      pass: 'shza sjef fwbr yyka'
    }
  });
  
  var mailOptions = {
    from: 'dreamyweddy@gmail.com',
    to: 'dreamyweddy@gmail.com',
    subject: 'New Customer',
    text: JSON.stringify(newInterest)
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
module.exports = router