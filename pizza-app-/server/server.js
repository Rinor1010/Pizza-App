const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes");
const app = express();

dotenv.config();

mongoose.connect(
  process.env.URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Database Connected")
);

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(4000, console.log("Server Started at Port 4000"));
