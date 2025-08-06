const http = require('http');

const port = process.env.PORT || 1000;

const server = http.createServer((req, res)=>{
    console.log(req.url)

    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1>This is Shashank Simejiya</h1> <p>I Am Study in Atmiya University </p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>This is About Page</h1> <p>I Am Study in Atmiya University </p>');
    }
    else{
        // res.shashank(); // this is a use of any command are server is a crashed
        res.statusCode = 404;
        res.end('<h1>Not Found</h1> <p>Hey this page was not found on this server</p>');
    }

    res.setHeader = ('Content-type', 'text/html')
})

server.listen(port, () => {
    console.log(`Server is Listening on port ${port}`);
});