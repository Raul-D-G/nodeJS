require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.all("/*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Origin, Accept');
    next();
});

const userRouter = require("./api/users/user.router");
app.use("/api/users", userRouter);


app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running", process.env.APP_PORT);
})