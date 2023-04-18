const express = require('express');
const User = require('../schema/userSchema');
const router = express.Router();
const jwt = require("jsonwebtoken");
const keysecret = "durgeshchaudharydurgeshchaudhary"
const bcrypt = require('bcryptjs');
const fetchuser = require('../middleware/fetchuser');


//======== signup API path /user/signup =====================

router.post('/signup', async (req, res) => {
    // destructure the value of name, email, password form frontend(req.body)
    const { fname, email, password } = req.body;
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
            const data = new User({ username: fname, email, password: pass })
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

router.post('/BookedAddress', fetchuser, async (req, res) => {
    const { Address, VehicleId } = req.body
    try {
        const data = new Booking({
            userId: req.user.id,
            pickupAddress: Address.pickupAddress,

        })
        const save = await data.save();
        res.status(200).json(save);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})


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