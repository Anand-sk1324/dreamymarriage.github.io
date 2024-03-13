require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
var bodyParser = require('body-parser');


mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.once('open', () => console.log("DB connected"))

app.use(express.json())
app.use(express.static('public'))
app.use(cors("https://dreamy-wedding.onrender.com"))
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://dreamy-wedding.onrender.com"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});

app.use(bodyParser.json());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({
  extended: true
}));

const interestsRouter = require('./routes/interestsRoute.js');
app.use("/interests", interestsRouter)
app.listen(3000, () => {
  console.log("Server Started")
})