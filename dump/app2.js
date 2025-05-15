const http = require('http')

const server = http.createServer((request, response) => {   
    response.statusCode = 200
    response.write('Test state text')
    response.end()
})

server.listen(3000, '127.0.0.1', () => console.log('Server running'))