const http = require('http')
const fs = require('fs');
const { text } = require('stream/consumers');

fs.readFile('./index.html', (err, text) => {
    http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(text) 
    }).listen(3002)
})
