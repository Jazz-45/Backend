console.log("My Name is Jayesh");

require('dotenv').config();

const express = require('express')
const app = express()
const port = 3000
const port2=process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('Twitter is a good Platform')
})

app.listen(port2, () => {
  console.log(`Example app listening on port ${port2}`)
})