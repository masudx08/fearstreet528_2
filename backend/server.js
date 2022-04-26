const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const PORT = process.env.PORT || 5555
const bodyParser = require('body-parser')
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, ()=> console.log("Database Connected"))

app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)
app.listen(PORT, ()=> console.log("Server is running with Port "+PORT))