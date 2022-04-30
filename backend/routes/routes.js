const express = require("express");
const router = express.Router();
const ContactModel = require("../models/ContactModel");
const AppointmentModel = require("../models/AppointmentModel");
const jwt = require("jsonwebtoken");
const { authorizer } = require("../middleware/middleware");
const UserModel = require("../models/UserModel");
require("dotenv").config();
//  Contact
router.post("/contact", (req, res) => {
  const Contact = new ContactModel({
    name: req.body.name,
    email: req.body.email,
    text: req.body.text,
  });
  Contact.save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/contact", (req, res) => {
  ContactModel.find().then((result) => {
    res.send(result);
  });
});

router.delete("/contact/:id", (req, res) => {
  ContactModel.deleteOne({ _id: req.params.id }).then((result) => {
    res.send(result);
  });
});

//  Appointment
router.post("/appointment", (req, res) => {
  const currentTime = new Date();
  const Appointment = new AppointmentModel({
    name: req.body.name,
    email: req.body.email,
    dob: req.body.dob,
    schedule: req.body.schedule,
    problem: req.body.problem,
    appointmentTime: currentTime,
    status: req.body.status
  });
  Appointment.save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/appointment", (request, res) => {
  AppointmentModel.find().then((result) => {
    res.send(result);
  });
});

router.delete("/appointment/:id", (req, res) => {
  AppointmentModel.deleteOne({ _id: req.params.id }).then((result) => {
    res.send(result);
  });
});

router.get("/getjwt", (req, res) => {
  const user = JSON.parse(req.headers.user)
  UserModel.findOne({email: user.email})
  .then((result) => {
    const {name, email, authProvider, uid, role, _id} = result
    const jwtAccessToken = jwt.sign({name, email, authProvider, uid, role, _id}, process.env.JWT_SECRET);
    res.status(200).send({
      message: "Successfully logged in",
      jwtAccessToken: "Bearer " + jwtAccessToken,
    });
  });
});

router.get("/getuser", authorizer, (req, res) => {
  console.log(req.user)
  res.send(req.user);
});
router.post("/user", (req, res) => {
  const User = new UserModel(req.body);
  User.save().then((result) => {
    res.send(result);
  });
});
 
router.post("/appointmentstatus", (req, res) => {
  const status = req.body.status
  AppointmentModel.findOneAndUpdate({_id:req.body.id},  { $set: { status } },)
  .then(result=>{
    res.send({status})
  })
});

router.post("/addmeetlink",   (req, res)=>{
  const link = req.body.link
  AppointmentModel.findOneAndUpdate({_id:req.body.id},  { $set: { link } },)
  .then(result=>{
    res.send({link})
  })
})

module.exports = router;
