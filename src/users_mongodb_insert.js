const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/nuntium';

const insertUsers = (newUser) => {
    MongoClient.connect(url, (err, db) => {
        if (err) {
            throw err;
        }
        const dbo = db.db('nuntium');
        const userToInsert = {
            username: newUser.name,
            email: newUser.email,
            password: newUser.password
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

