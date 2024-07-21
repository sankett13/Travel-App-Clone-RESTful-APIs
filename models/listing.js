const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title : {
        type :String,
        required :true,
    },
    description : String,
    image : {
        type :String,
        default : "https://unsplash.com/photos/white-and-black-bus-running-near-the-mountain-6mcVaoGNz1w",
        set : (v) => v === "" ? "https://unsplash.com/photos/white-and-black-bus-running-near-the-mountain-6mcVaoGNz1w" : v,
    },
    price : Number,
    location : String,
    country : String
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;