
const path = require('path');
//incluir los modulos de npm q vamos a usar
const express = require('express');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index')
const app = express();

//conectame a la base de datos
mongoose.connect('mongodb+srv://sakrkoc:k32224139@cluster0.tjbcv.mongodb.net/cursosit', {useNewUrlParser:true})
 .then(db => console.log('base conectada'))
 .catch(err => console.log('Ocurrio un error', err))


app.set('port', process.env.PORT || 8000)


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.use('/', indexRouter)

app.listen(app.get('port'), () =>{
    console.log(`el servidor esta corriendo en puerto ${app.get('port')}`)
})
