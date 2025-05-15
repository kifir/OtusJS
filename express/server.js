var express = require('express');
var app = express();
var person = [];

app.use((req, res, next) => {
    console.log(new Date().toISOString());
    next();
});

app.use(express.json()); // Для JSON-данных

//

app.get('/person/create', (req, res) => {     
    person[req.query.id] = {
        id: req.query.id,
        name: req.query.name,
        age: req.query.age
    };;

    res.send('Create ' + JSON.stringify(person[req.query.id]));
});

app.post('/person/create', (req, res) => {     
    person[req.body.id] = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age
    };

     res.send(JSON.stringify(req.body));
});

app.get('/person/:id', (req, res) => {  
    res.send(person[req.params.id]);
});

app.listen(3000, () => console.log('Server starting at 3000 port'));