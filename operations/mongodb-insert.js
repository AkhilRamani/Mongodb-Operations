const MongoClient =  require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true}
    ,(err,client)=>{
        var db= client.db('TodoApp');

        if(err){
            return console.log('Unable to connect to the Mongo server');
        }
        console.log('connected to Mongo server');

        db.collection('Todos').insertOne({
            text: 'something to Do',
            completed: false
        }, (err,result)=>{
            if (err) { return console.log('unable to insert collection');}

            console.log(JSON.stringify(result.ops,undefined,2));
        });

        // db.collection('Users').insertOne({
        //     name: 'Akhil',
        //     age: 21,
        //     location: 'surat'
        // },(err,result)=>{
        //     if (err){
        //         return console.log('Unable to insert user', err);       
        //     }

        //     console.log(JSON.stringify(result.ops, undefined ,2));
        // });

        client.close();
    });