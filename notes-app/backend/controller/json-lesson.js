const express = require('express')
const app = express()
const {notes } = require('./data/notes.json')





// Intro to Express lesson going over app.listen and setting up the server
// returning local data response object without frontend
// going over request and response object 
//connecting front and backend 

app.get('/', (req, res) => {
    res.send("server presto")
  res.json(notes)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})