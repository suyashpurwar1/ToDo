const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes/toDoRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connect Succesfully"))
  .catch((err) => console.log(err));
app.use("/api",routes);
app.listen(PORT, () => console.log(`Listen at ${PORT}`));
