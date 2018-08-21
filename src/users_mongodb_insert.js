var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/nuntium';

export const insertUsers = (name, email, password) => {
    MongoClient.connect(url, (err, db) => {
        if (err) {
            throw err;
        }
        var dbo = db.db('nuntium');
        var userToInsert = {
            username: name,
            email: email,
            password: password
        };
        dbo.collection('users').insertOne(userToInsert, (err, res) => {
            if (err) {
                throw err;
            }
            console.log('1 user signed up');
            db.close;
        });
    });
}
