var express = require('express');
var app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.send('Hello Wold');
});

app.get('/hello', (req, res) => {
    res.send('Hello2 ' + req.query.name);
});

app.get('/person/me', (req, res) => {
    res.json({name: 'Vitaly', age: 30});
});

app.get('/person', (req, res) => {
    res.send({name: 'Ivan'});
})

app.get('/index', (req, res) => {
    //const options = {
    //    root: path.join(__dirname)
    //};

    //res.sendFile('./index.html', options);
    res.sendFile(path.resolve('./index.html'));
});

app.listen(3000, () => console.log('Hello from 3000'));