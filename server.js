const http = require('http');

const host = '127.0.0.1';
const port = 5000;

// creating the server 
const server = http.createServer((req, res)=> {
    console.log(req.headers.host);
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('test node js');
    console.log(`new request`);
});

// listening to requests
server.listen(port,()=>{
    console.log(`Server is listening for requests at http://${host}:${port}`)
})

