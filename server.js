const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = 5000;

// creating the server and routing
const server = http.createServer((req, res)=> {
    res.setHeader('Content-Type','text/html');
    console.log(req.url, req.method);
    let path = './views/'

    switch(req.url){
        case '/':
            fs.readFile(path += 'index.html' ,(err, data) => {
                if(err){
                    console.log(err.message);
                    res.end();
                }
                else{
                    res.write(data);
                    res.statusCode = 200;
                    res.end();
                }
            });
            break;
        case '/about':
            fs.readFile(path += 'about.html', (err, data) => {
                if(err) {
                    console.log(err.message);
                    res.end();
                }
                else{
                    res.write(data);
                    res.statusCode = 200;
                    res.end();
                }
                
            });
            break;
        case '/add-blog':
            fs.readFile(path += 'add-blog.html', (err, data) => {
                if(err){
                    console.log(err.message);
                    res.end();
                }
                else {
                    res.write(data);
                    res.statusCode = 200;
                    res.end();
                }
            });
            break;
        default :
            fs.readFile(path += '404.html', (err, data) => {
                if(err){
                    console.log(err.message);
                    res.end();
                }
                else{
                    res.write(data);
                    res.statusCode = 404;
                    res.end();
                }
            })

    }
});

// listening to requests
server.listen(port, host, () => {
    console.log(`Server is listening for requests at http://${host}:${port}`)
});

