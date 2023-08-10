const express = require("express")
const app = express()

require('dotenv').config()

let dbConncect = require('./dbConnect')
const userRoutes = require('./routes/userRoutes')

app.use(express.json());

app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
    res.json({message: "Hello world, this is Module 9 Lab 3."})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})