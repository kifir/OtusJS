const http = require('http');

const port = 3000;

const server = http.createServer(
    function(req, res){
        res.writeHead(200);
        res.end('Hello!');
    }
);

server.listen(port, 
    function() {
        console.log(`Server work on port ${port}`);
    }
);