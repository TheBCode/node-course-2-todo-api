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

    //deleteMany
    db.collection('Users').findOneAndDelete({_id: new ObjectID('592ea4dc79b9ba1ba187138c')}).then((result) => {
       console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});