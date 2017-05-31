/**
 * Created by MrMuzixOwn on 5/31/17.
 */
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('592e47a62334ea1a25ade9aa')
    }, {
        $set: {
            name: 'Byron'
        },
        $inc:{
            age: 1
        }
    });
    // db.close();
});