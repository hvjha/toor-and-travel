const express = require('express');
const User = require('../schema/userSchema');
const router = express.Router();
const jwt = require("jsonwebtoken");
const keysecret = "durgeshchaudharydurgeshchaudhary"
const bcrypt = require('bcryptjs');
const fetchuser = require('../middleware/fetchuser');


// signup API path /user/signup

router.post('/signup', async (req, res) => {
    const { fname, email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(password, salt);

        const savedEmail = await User.findOne({ email: email })
        if (savedEmail) {
            res.status(404).json({ error: "This Email is Already Exist" });
        } else {
            const data = new User({ username: fname, email, password: pass })
            const user = await data.save()
            const userdata = {
                user: {
                    id: user.id
                }
            }
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

//login API  using post

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
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


module.exports = router;