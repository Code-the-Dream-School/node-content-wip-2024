const express = require('express')
const app = express()
const {notes } = require('./data/notes.json')





//use as starting point
//continuing from frontend proxy http set and 
//successful data call
//explain use case of using dummy data in terms 
//of front end development with some actual limitations
//that come with fully integrated development
app.get('/', (req, res) => {
    res.send("server presto")
  res.json(notes)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})