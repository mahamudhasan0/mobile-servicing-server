require("dotenv").config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//DATABASE
const connectDB = require("./MongoDB");
connectDB();

//INITIALIZE APP
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//ROUTERS
app.use('/api/review',require('./routes/Review'))
app.use('/api/admin',require('./routes/Admin'))
app.use('/api/create',require('./routes/CreateAdmin'))

const PORT = process.env.PORT|| 5000;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });