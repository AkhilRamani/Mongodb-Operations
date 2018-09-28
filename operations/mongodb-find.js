const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true},
(err, client)=>{
    var db=client.db('TodoApp');
    if(err){
        return console.log('Unable to connect database');
    }
    
    db.collection('Users').find({name:'Akhil'}).toArray().then(
        (docs)=>{
            console.log(JSON.stringify(docs,undefined,2));
        } , (err)=>{
            console.log('Fetching error', err);
        }
    );

    db.collection('Users').find().count().then((count)=>{
        console.log(`Users count :${count}`);
    }, (err)=>{
        console.log('Unable to fetch data',err);
    });
    
    client.close();
});