const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8080

const boredRoutes = require('./routes/boredRoutes')

app.use(express.json())

app.get('/', (req, res) => {
        res.status(200).json({message: "Hello World"})
})

app.use('/api/bored', boredRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})