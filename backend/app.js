const express = require('express');

app.use(express.json());

//route import
const product = require("./routes/productRoute");
app.use("/api/v1", product);

const app = express();

module.exports = app