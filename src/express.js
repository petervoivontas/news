const express = require('express');
const app = express();

const PORT = 3056;

const users = [];

app.post('/signup', (req, res, next) => {
    const query = req.query;
    console.log(`This is the query: ${query}`);
    if (query.name && query.email && query.password) {
        const user = {
            name: query.name,
            email: query.email,
            password: query.password
        };
        users.push(user);
        console.log(users);
        res.send(user);
    }
});

app.get('/user/:name', (req, res, next) => {
    console.log(req.params.name);
    let userRequested;
    users.forEach(element => {
        if (element.name === req.params.name) {
            console.log(element);
            userRequested = element;
        }
    });
    console.log(userRequested);
    res.send(userRequested);
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})