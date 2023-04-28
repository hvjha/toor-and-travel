const express = require('express');
const UserData = require('../schema/UserData');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();

router.post('/datauser', async (req, res) => {
    try {
        const data = new UserData({ photo: "", state: "", city: "", placeName: "", video: "", text: "" })
        const user = await data.save()
        res.status(200).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(401).send("Some error occured")
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

module.exports = router;