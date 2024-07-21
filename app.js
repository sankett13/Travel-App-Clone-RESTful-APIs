const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const app = express();
const port = "8080";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// DB Part
//calling main funtion
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

//for DB
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");
}

// Routing Part
app.listen(port, () => {
  console.log(`app is listening on Port ${port}`);
});

//
app.get("/", (req, res) => {
  res.render("listing/home.ejs");
});

//testListing
// app.get("/testListing", async (req,res)=>{
//     let samplelisting = new Listing({
//         title : "My Home",
//         description : "Ahmedabad",
//         price : 1200,
//         location : "Goa",
//         country : "India"
//     });

//     await samplelisting.save();
//     console.log("sample saved");
//     res.send("Succesfull");

// })

//Index Route
app.get("/listings", async (req, res) => {
  const alllisting = await Listing.find({});
  // console.log(alllisting);
  res.render("listing/index.ejs", { alllisting });
});

//New Listing Route
app.get("/listings/new", (req, res) => {
  res.render("listing/new.ejs");
});

//Post to Add new
app.post("/listings", async (req, res) => {
  //let { title ,description ,image, price, location, country } = req.body;
  const newlisting = new Listing(req.body.listing); // 2nd way
  //   console.log(newlisting);
  await newlisting.save();
  res.redirect("/listings");
});

//PUT Route
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

//Update Route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const currListing = await Listing.findById(id);
  res.render("listing/update.ejs", { currListing });
});

//DELETE Route
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});

//Show Route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  //   console.log(id);
  const currListing = await Listing.findById(id);
  //   console.log(currListing);
  res.render("listing/show.ejs", { currListing });
});
