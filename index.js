const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');


const usuario = require('./routes/RutaUsuario');
const cliente = require('./routes/RutaCliente');
const vehiculo = require('./routes/RutaVehiculo');
const suscripcion = require('./routes/RutaSuscripcion');
const empleado = require('./routes/RutaEmpleado');
const tiquete = require('./routes/RutaTiquete');



const BD = require('./config/BD');
const Usuario = require('./models/Usuario');
const Cliente = require('./models/Cliente');
const Empleado = require('./models/Empleado');
const Tiquete = require('./models/Tiquete');
const Vehiculo = require('./models/Vehiculo');
const Suscripcion = require('./models/Suscripcion');


const app = express();
BD();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(methodOverride());
app.use(bodyParser.urlencoded({ extended : false }))

app.get('/', function(req, res){
    res.send("Api parqueadero Autos Colombia")
})

app.use('/api', tiquete);
app.use('/api', vehiculo);
app.use('/api', suscripcion);
app.use('/api', cliente);
app.use('/api', empleado);
app.use('/api', usuario);

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log('Aplicación iniciada en el puerto: ', PORT);
})