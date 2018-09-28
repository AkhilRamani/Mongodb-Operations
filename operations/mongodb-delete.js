const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser:true},
(err,client)=>{
    var db=client.db('TodoApp');

    if(err){
        return console.log('unable to connect to mongodb');
    }

    // db.collection('Todos').deleteMany({text:"buy file"}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({text:"something to Do"}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name:'mukund'}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({_id: new ObjectID('5babc1fec8f3edce254ea425')}).then((result)=>{
        console.log(result);
    });

    client.close();

});