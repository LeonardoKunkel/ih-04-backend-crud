// 1. Importaciones
const express = require('express');
const app = express();

const hbs = require('hbs')
const connectdb = require('./config/db');

// 2. Middelwares
require('dotenv').config()

connectdb()

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// Permite la 
app.use(express.urlencoded({ extended: true }))

// 3. Rutas
app.use('/', require('./routes/index.routes'))
app.use('/books', require('./routes/books.routes'));

app.listen(process.env.PORT, () => console.log(`It's alive`))
