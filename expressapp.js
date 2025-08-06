const express = require('express')
const app = express()
const port = 500

app.get('/', (req,res) =>{
    res.send("Hello World!")
})

app.get('/about', (req,res) =>{
    res.send("This is a About Page...")
})

app.listen(port, () => {
    console.log(`Example app listing at http://localhost:${port}`)
})