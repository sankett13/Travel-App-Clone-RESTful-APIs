const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


// DB Part
//calling main funtion
main().then(()=>{
    console.log("Connected to DB"); 
})
.catch(err => {
    console.log(err);
})

//for DB
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/airbnb');
}


const initDB = async () =>{
    
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was saved");
}

initDB();