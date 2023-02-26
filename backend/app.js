const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const errorHandler = require("./middleware/error");
app.use(express.json());
app.use(cookieParser());

// Route import
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const category = require("./routes/categoryRoute");
const order = require("./routes/orderRoute");

app.use("/api/v2",product);

app.use("/api/v2",user);

app.use("/api/v2",category);

app.use("/api/v2",order);

app.use(errorHandler);

module.exports = app