const express = require('express');
const driverSchema = require("../schema/driverSchema");
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')

// ============ fetching vehicles according drivers =============

router.get("/allvehiclesData", async (req, res) => {
    try {
        const data = await driverSchema.find(req.params.id);
        res.status(201).json({ status: 201, data })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

// ============ fetching vehicles according drivers =============

router.get("/vehiclesData", fetchuser, async (req, res) => {
    const user = req.user;
    try {
        const data = await driverSchema.find({ driverId: user.id });
        res.status(201).json({ status: 201, data })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})


router.get("/VehData", async (req, res) => {
    try {
        const data = await driverSchema.aggregate([
            {
                $match: { transName: "MOVERS TRUCKS" }
            }
        ])
        res.status(200).json(data)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

router.get("/VehNext", async (req, res) => {
    try {
        const data = await driverSchema.aggregate([
            {
                $match: { transName: "ON ROAD EXPRESS" }
            }
        ])
        res.status(200).json(data)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

// ========== API for post vehicles data to database ==============

router.post('/driverData', fetchuser, async (req, res) => {
    const { name, lname, gender, DOB, email, phone, PanCardNumber, address,
        city, state, pincode, country, basefare, bodysize, lodingCapacity,
        transName, Vnamber, DLnumber, RCnumber, PolutionCertificate, driverImage,
        VehicleImage, DLImage, RCImage, } = req.body;
    if (!Vnamber === '') {
        res.status(404).send("Vehicle Number is Not found");
    }
    try {

        const checkVehicleNumber = await driverSchema.findOne({ Vnamber: Vnamber });
        if (checkVehicleNumber) {
            res.status(404).json({ error: "This Vehicle Number is Already Exist" });
        } else {
            const data = new driverSchema({
                driverId: req.user.id, name, lname, gender, DOB, email, phone, PanCardNumber,
                address, city, state, pincode, country, basefare, bodysize, lodingCapacity,
                transName, Vnamber, DLnumber, RCnumber, PolutionCertificate, driverImage,
                VehicleImage, DLImage, RCImage,
            })
            const saveddata = await data.save()
            // return the backend status to frontend
            res.status(201).json({ status: 201, saveddata })
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

// ========= put request API for edited data save ==============

router.put("/editedData/:id", async (req, res) => {
    const { name, lname, gender, DOB, email, phone,
        PanCardNumber, address, city, state, pincode, Vnamber,
        country, basefare, bodysize, lodingCapacity, transName,
        RCnumber, DLnumber, PolutionCertificate, driverImage,
        VehicleImage, DLImage, RCImage } = req.body;
    try {
        const newData = {};
        if (name) {
            newData.name = name
        }
        if (lname) {
            newData.lname = lname
        }
        if (gender) {
            newData.gender = gender
        }
        if (DOB) {
            newData.DOB = DOB
        }
        if (email) {
            newData.email = email
        }
        if (phone) {
            newData.phone = phone
        }
        if (PanCardNumber) {
            newData.PanCardNumber = PanCardNumber
        }
        if (address) {
            newData.address = address
        }
        if (city) {
            newData.city = city
        }
        if (Vnamber) {
            newData.Vnamber = Vnamber
        }
        if (state) {
            newData.state = state
        }
        if (pincode) {
            newData.pincode = pincode
        }
        if (country) {
            newData.country = country
        }
        if (country) {
            newData.basefare = basefare
        }
        if (bodysize) {
            newData.bodysize = bodysize
        }
        if (lodingCapacity) {
            newData.lodingCapacity = lodingCapacity
        }
        if (DLnumber) {
            newData.DLnumber = DLnumber
        }
        if (RCnumber) {
            newData.RCnumber = RCnumber
        }
        if (transName) {
            newData.transName = transName
        }
        if (PolutionCertificate) {
            newData.PolutionCertificate = PolutionCertificate
        }
        if (driverImage) {
            newData.driverImage = driverImage.value
        }
        if (VehicleImage) {
            newData.VehicleImage = VehicleImage.value
        }
        if (DLImage) {
            newData.DLImage = DLImage.value
        }
        if (RCImage) {
            newData.RCImage = RCImage.value
        }

        const save = await driverSchema.findByIdAndUpdate({ _id: req.params.id },
            { $set: newData }, { new: true })
        res.status(201).json({ status: 201, save });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

module.exports = router;
