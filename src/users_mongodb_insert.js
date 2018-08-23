const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://192.168.2.7:27017/nuntium';

exports.insertUsers = (newUser) => {
    MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
        if (err) {
            throw err;
        }
        const dbo = db.db('nuntium');
        dbo.collection('users').insertOne(newUser, (err, res) => {
            if (err) {
                throw err;
            }
            console.log('1 user signed up');
            db.close;
        });
    });
}

