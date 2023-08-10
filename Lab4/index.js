const express = require('express')
const app = express()
require("dotenv").config();

const memeRoutes = require('./routes/memeRoutes')

const PORT = process.env.PORT || 8080

app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).json({message: "Prepare to Laugh!"})
});

app.use('/api/meme', memeRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});