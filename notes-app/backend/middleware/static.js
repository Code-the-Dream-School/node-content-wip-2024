const express = require('express')
const path = require('path')

const app = express()

// setting up 
// overview of middleware and app.listen.
// necessity for error handling
//example of rendering with just backend


app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})