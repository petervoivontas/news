const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/nuntium';
const imports = require('./users_mongodb_insert');
const express = require('express');
const app = express();

const PORT = 4000;

const users = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/signup', (req, res, next) => {
    if (req.body.name && req.body.email && req.body.password) {
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        users.push(newUser);
        imports.insertUsers(newUser);
        res.send(newUser);
    } else if (req.body.name === '') {
        res.status(404).send('Name cannot be empty');
    } else if (req.body.email === '') {
        res.status(404).send('Email cannot be empty');
    } else if (req.body.password === '') {
        res.status(404).send('Password cannot be empty');
    }
});

// app.get('/user/:name', (req, res, next) => {
//     console.log(req.params.name);
//     let userRequested;
//     users.forEach(element => {
//         if (element.name === req.params.name) {
//             console.log(element);
//             userRequested = element;
//         }
//     });
//     console.log(userRequested);
//     res.send(userRequested);
// });

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});