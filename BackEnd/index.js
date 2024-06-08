const express = require("express");
const mongoose = require("mongoose");
const catRoute = require("./routes/cat.route.js");
const dogRoute = require("./routes/dog.route.js");
const birdRoute = require("./routes/bird.route.js");
const app = express();

//middleware
app.use(express.json());


//routes
app.use("/api/cat", catRoute);
app.use("/api/dog", dogRoute);
app.use("/api/bird", birdRoute);

app.get("/", (req, res) => {
  res.send("Ky eshte nje projekt per internship");
});

mongoose
  .connect(
    "mongodb+srv://gjiniendri11:uAAi3BHxmC5g7rQI@backenddatabase.9z6lcxf.mongodb.net/Internship?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to the Database");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch(() => {
    console.log("Connection Error");
  });
