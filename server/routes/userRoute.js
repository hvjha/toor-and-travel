const express = require('express');
const User = require('../schema/userSchema');
const router = express.Router();
const jwt = require("jsonwebtoken");
const keysecret = "durgeshchaudharydurgeshchaudhary"
const bcrypt = require('bcryptjs');
const fetchuser = require('../middleware/fetchuser');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator')
const Mailgen = require("mailgen");
const Booking = require('../schema/BookingSchema')


//========== email config==================
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "durgeshchaudhary020401@gmail.com",
        pass: "lqfxwpogsaocehjc"
    }
})

let MailGenerator = new Mailgen({
    theme: "default",
    product: {
        name: "Mailgen",
        link: "https://mailgen.js/"
    }
})

//======== signup API path /user/signup =====================

router.post('/signup', async (req, res) => {
    // destructure the value of name, email, password form frontend(req.body)
    const { username, phone, email, password, type } = req.body;
    try {
        // hash the password using salt of 10
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(password, salt);
        // check data is present 
        const savedEmail = await User.findOne({ email: email })
        // if data exist than return error 
        if (savedEmail) {
            res.status(404).json({ error: "This Email is Already Exist" });
        } else {
            // else condition me save the userdata
            const data = new User({ username, email, password: pass, type, phone })
            // save user data using .save method
            const user = await data.save()
            // create token using secret key
            const userdata = {
                user: {
                    id: user.id
                }
            }
            // generate token using userid and secret key
            let token = jwt.sign(userdata, keysecret)
            if (token && user) {
                res.status(201).json({ status: 201, token, user })
            } else {
                res.status(401).send("Some error occured")
            }
        }
    } catch (error) {
        console.error(error.message);
        res.status(401).send("Some error occured")
    }
})

//========= login API  using post  ===========

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        //  check entered eamil is valid or not
        const user = await User.findOne({ email: email });
        if (user) {
            // after validation email check for password compare password with users entered password
            const Ismatch = await bcrypt.compare(password, user.password);

            if (!Ismatch) {
                res.status(422).json({ error: "invalid details" })
            } else {
                const data = {
                    user: {
                        id: user.id
                    }
                }
                let token = jwt.sign(data, keysecret);
                res.status(201).json({ status: 201, user, token })
            }
        }
    } catch (error) {
        console.error(error.message);
        res.status(401).send("Some error occured")
    }
})

// ============ using post generate otp at signup time API =====================

router.post('/generateOTPAtSignup', async (req, res) => {
    const { email } = req.body
    if (email) {
        req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })
        console.log(req.app.locals.OTP)
        res.status(201).send({ code: req.app.locals.OTP })
    } else {
        return res.status(400).send({ error: "Email does not exist" })
    }
})


// ============ using post generate otp at Reset Password time API ================

router.post('/generateOTP', async (req, res) => {
    const { email } = req.body
    const user = await User.findOne({ email: email });
    if (user) {
        req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })
        console.log(req.app.locals.OTP)
        res.status(201).send({ code: req.app.locals.OTP, user })
    } else {
        return res.status(400).send({ error: "Email does not exist" })
    }
})

// ============ After generating otp send mail API =====================

router.post("/sendMail", async (req, res) => {
    const { email, text, subject } = req.body;

    var Useremail = {
        body: {
            intro: text || "Welcome to Loadkro",
            outro: 'Need help, or have question? Just reply to this email'
        }
    }
    var emailBody = MailGenerator.generate(Useremail);
    let message = {
        from: " durgeshchaudhary020401@gmail.com",
        to: email,
        subject: subject || "Signup Successfull",
        html: emailBody
    }
    transporter.sendMail(message)
        .then(() => {
            return res.status(200).send({ msg: "You should receive an email from Us. " })
        })
})

//============ reset password using put =====================

router.put('/resetPasword', async (req, res) => {
    const { email, password } = req.body;
    try {
        const find = await User.findOne({ email: email });
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(password, salt);
        if (find) {
            const data = await User.findOneAndUpdate({ email: email }, { $set: { password: pass } }, { new: true })
            res.status(201).send({ data })
            console.log(data)
        } else {
            res.status(404).send({ msg: "Email is not found" })
        }
    } catch (error) {
        res.status(404).send({ msg: "Some error occured" })
    }
})

// =======  fetch users data according to logged users API ===============

router.get('/getUserData', fetchuser, async (req, res) => {
    const user = req.user;
    try {
        const data = await User.findOne({ _id: user.id });
        res.json({ data })
    } catch (error) {
        console.error(error.message);
        res.status(401).send("Some error occured")
    }
})

//============== edit users profiles API ==================

router.put("/editUserProfiledata/:id", async (req, res) => {
    const { username, link, email, phone } = req.body;
    try {
        const newData = {};
        if (username) {
            newData.username = username.value
        }
        if (email) {
            newData.email = email.value
        }
        if (phone) {
            newData.phone = phone.value
        }
        if (link) {
            newData.link = link.link
        }
        const save = await User.findByIdAndUpdate({ _id: req.params.id },
            { $set: newData }, { new: true })
        res.status(201).json({ status: 201, save });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

router.post('/BookedAddress', fetchuser, async (req, res) => {
    const { Address, VehicleId } = req.body
    try {
        const data = new Booking({
            userId: req.user.id,
            pickupAddress: Address.pickupAddress,
            PickupPincode: Address.Ppincode,
            vehicleId: VehicleId,
            PickupCity: Address.Pcity,
            DropOffAddress: Address.DropOffAddress,
            DropPincode: Address.Dpincode,
            DropCity: Address.Dcity,
            name: Address.name,
            Req: Address.Req,
            phone: Address.phone
        })
        const save = await data.save();
        res.status(200).json(save);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

router.put("/ChangeVehicleStatus/:id", (req, res) => {
    const { Booked } = req.body;
    Booking.findOneAndUpdate(
        { vehicleId: req.params.id },
        {
            $set:
            {
                status: Booked
            },
        }
    )
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get('/bookedVehicles', fetchuser, async (req, res) => {
    try {
        const book = await Booking.find({ userId: req.user.id });
        res.status(200).json(book);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

module.exports = router;