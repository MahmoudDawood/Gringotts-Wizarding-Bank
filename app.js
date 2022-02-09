const express = require('express')
const router = require('./routes/router')

const app = express()

// Connect to MongoDB
// const dbURL = 'mongodb+srv://dude:01128593701@cluster0.nhdlo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
app.use(router)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is up on port' + port)
})