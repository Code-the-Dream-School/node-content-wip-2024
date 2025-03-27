// server, before express

const http = require('http')
const server = http.createServer((req, res)=>{
    const url = req.url
//Build out one page, add readfile sync fs and replace simple write object

    //home
    if (url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>home</h1>')
    }
    else if (url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>about Notes App</h1>')
    }
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
    }
})

//comment out after 

//express lessson beginning (install express, mongoose, dotenv, cors and
// explain each, change nodemon script call as well)

// const express = require('express')
// const app = express()
// const PORT = 8080;

// app.listen(
//     PORT, () => console.log(`running on http://localhost:${PORT}`)
// )

//Introduce POSTMAN here
//


// const express = require('express')
// const app = express()

// app.get('/', (req, res)=> {
//     res.send('Hello world what is up')
// });

// app.listen(8080)

//install nodedemon 

// const express = require('express')
// const app = express()
// const path = require('path')

// app.get('/', (req, res)=> {
//     res.sendFile(path.join(__dirname, 'index.html')
// });

// app.listen(8080, ()=> {
  //  console.log('server listening, backend console logs will appear in terminal')})

//Continuing on building out API 


//show frontend communicate to server for data, making a request to backend in script
//emphasize using script tags isn't standard this is just for demonstration of 
//connection, we will be building out our frontend separately and with different
//connection point/rules



//Represention State Transfer RESTful Routing
//Location and resource, organization URLs (URIS)
//request and response
//Verb method followed by the URI
// CRUD as it cooresponds with REST verbs (bringing it back to day one)
// request will also contain the format specs and
// authentication that may or may not be required and custom payload
//response contains status code 
// 2 good 4 you messed up 5 server messed up
// request response cycle is stateless/nothing stored and reliable

//


const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'index.html')
)});


app.get('/api/user', (req, res)=> {
    const users = [{
        name: 'tina',
        id: '888',
        pubnotes: [{}, {}, {}],
    },
    {
        name: 'shell',
        id: '881',
        pubnotes: [{}, {}, {}],
    },
    {
        name: 'marty',
        id: '882',
        pubnotes: [{}, {}, {}],
    },
]
res.json(users)});

app.listen(8080, ()=> {
   console.log('server listening, backend console logs will appear in terminal')})



