/*
This will be the main file of the backend application.
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(200)
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})