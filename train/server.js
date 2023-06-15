const express = require("express");
require("dotenv").config();
const app = express();
const trainRouter = require("./router/trainRouter");
const dbConfig = require("./dbconfig");
app.use(express.json());

app.use("/train", trainRouter);

const port = process.env.port || 5000;
app.listen(port, () => console.log(`server is running on the port ${port}`));