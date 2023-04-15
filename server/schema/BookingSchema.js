const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    vehicleId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    PickupPincode: {
        type: String,
        required: true
    },
    PickupCity: {
        type: String,
        required: true
    },
    pickupAddress: {
        type: String,
        required: true
    },
    DropPincode: {
        type: String,
        required: true
    },
    DropCity: {
        type: String,
        required: true
    },
    DropOffAddress: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    Req: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: [
            "Selected",
            "applied",
            "Booked",
            "Cancel"
        ],
        default: "Selected"
    },
    date: {
        type: Date,
        default: Date.now,
        requird: true
    },
})

module.exports = mongoose.model("Booking", bookingSchema);
