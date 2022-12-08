const mongoose = require('mongoose');
const dotenv = require('dotenv').config();




const getConnection = async () =>{
    console.log("Conectando a BD");

    try{
        const URL = 'mongodb://osm3030:rbg0L1MmQoMaE0em@ac-mujl6hu-shard-00-00.5srrswx.mongodb.net:27017,ac-mujl6hu-shard-00-01.5srrswx.mongodb.net:27017,ac-mujl6hu-shard-00-02.5srrswx.mongodb.net:27017/parqueadero?ssl=true&replicaSet=atlas-35y8z2-shard-0&authSource=admin&retryWrites=true&w=majority';
        await mongoose.connect(
            URL, 
            { 
                useNewUrlParser: true, 
                useUnifiedTopology: true 
            });
            console.log("Conexion Exitosa! ");
    }catch(error){
        console.log(error);
    }

}

module.exports = getConnection;
