const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},
(err,client)=>{
    var db= client.db();
    if(err){
        return console.log('not connected', err);
    }
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('5bacc11325c49932f8ecc07e')
    // },{$set :{
    //     completed:true
    // }},{returnOriginal:false}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5bacc0f917575e12481c22c3')},
        {
            $set:{
                name: "Devid"
            },
            $inc:{
                age :1
            }
        },{returnOriginal:false}).then((result)=>{
            console.log(result);
        });

        client.close();
});