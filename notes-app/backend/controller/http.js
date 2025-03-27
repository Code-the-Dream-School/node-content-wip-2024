const http = require('http')


//use this lesson as just quick overview on just backend spin up 

// const server = http.createServer((req, res) => {
//   //making sure to console long the request object values as example here
//   const url = req.url
//   // home page
//   if (url === '/') {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write('<h1>home page</h1>')
//     res.end()
//   }
//   // about page
//   else if (url === '/about') {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write('<h1>about page</h1>')
//     res.end()
//   }
//   // 404
//   else {
//     res.writeHead(404, { 'content-type': 'text/html' })
//     res.write('<h1>page not found</h1>')
//     res.end()
//   }
// })

// server.listen(5000)