console.log('Go 2');

const http = require('http');

http.createServer((request, response) => {
    response.end('Hello NodeJS!');    
}).listen(3000, '127.0.0.1', () => {
    console.log('Сервер начал прослушивание запросов на порту 3000');
})