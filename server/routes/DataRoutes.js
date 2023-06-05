const express = require('express');
const UserData = require('../schema/UserData');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();

router.post('/datauser', fetchuser, async (req, res) => {
    const data = req.body.inpval
    console.log(req.user)
    try {
        const saved = new UserData({
            userId: req.user.id,
            photo: data.photo,
            state: data.state,
            city: data.city,
            placeName: data.place,
            video: data.video,
            text: data.msg
        })
        const user = await saved.save()
        res.status(200).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(401).send("Some error occured")
    }
})

router.get('/deleteData/:id', async (req, res) => {
    try {
        const data = await UserData.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

router.get('/UserEnteredData', fetchuser, async (req, res) => {
    try {
        const data = await UserData.find({ userId: req.user.id });
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

router.get('/AllUserData', async (req, res) => {
    try {
        const data = await UserData.find();
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

module.exports = router;