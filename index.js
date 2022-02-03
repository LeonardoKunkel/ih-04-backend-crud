// 1. Importaciones
const express = require('express');
const app = express();

const connectdb = require('./config/db');

// 2. Middelwares
require('dotenv').config()

connectdb()

// 3. Rutas
app.use('/', require('./routes/index.routes'))

app.listen(process.env.PORT, () => console.log(`It's alive`))
