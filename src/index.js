"use strict";
const express = require('express')
const path = require('path');
const app = express()
const mongoose = require('mongoose');
require ('dotenv').config()

 const puerto=83;
 const usuario='marco';
 const clave='Marko123';
 const ruta='/api/v1/productos';

 const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

 app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// /* variables de entorno */
 app.set('port',process.env.PORT || puerto);
 app.set('user',process.env.USER || usuario);
 app.set('password',process.env.PASSWORD || clave);
 app.set('ruta',process.env.RUTA || ruta);
 app.use(express.static(path.join(__dirname, 'public')));
 app.use(app.get('ruta'), require('../src/routes/rutas')  )

// mongoose
//     //.connect(`mongodb+srv://${app.get('user')}:${app.get('password')}@cluster0.icf6j.mongodb.net/marco?retryWrites=true&w=majority`, {
//     .connect(`mongodb+srv://marco:Marko123@cluster0.icf6j.mongodb.net/marco?retryWrites=true&w=majority`, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       socketTimeoutMS: 5000 
//   })
//   .then(() => console.log('Mongo Connectado, listo!'))
//   .catch(err => {
//      console.log('MongoDB Conneccion Error: ${err.message}');
//   });  


  // const array1 = [15, 12, 8, 130, 44];
  // const found = array1.find(element => element > 10);
  // console.log('marco',found);

//   const a = 'nose'
//   const b = a==='nose' ? '12':'13'
// console.log('resultado=',b)  

// let d = [{'a':11},{'b':12},{'c':13}]
// let e=[]

// let a = 5
// let b = 3
// b += a
// e.push({...d, 'motivo':'xxx' })
// console.log('m=',e)

app.listen(83, () => {
  console.log('Servidor en puerto, listo ', 83);
});

