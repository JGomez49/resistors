const express = require('express');
const path = require('path');
const app = express();

// -----Esto es direactamente de la documentacion
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//------------------------------------------------

// Initializations:
require('dotenv').config();
const port = process.env.PORT || 3000;

//Conexion a base de datos
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
  .then(()=> console.log('------------conectado a mongodb Atlas----------------')) 
  .catch(e => console.log('error de conexión', e))

//Motor de plantillas
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//Ruta de archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Rutas Web
app.use('/', require('./router/rutas'));
// app.use('/files' , require('./router/rutas'));

app.listen(port, ()=>{
    console.log('Hola', process.env.USER);
    console.log('Hoy es:', Date());
    console.log('Escuchando en puerto', port);
});
