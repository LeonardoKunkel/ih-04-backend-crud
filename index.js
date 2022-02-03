// 1. Importaciones
const express = require('express');
const app = express();


// 2. Middelwares
require('dotenv').config()

// 3. Rutas
app.use('/', require('./routes/index.routes'))

app.listen(process.env.PORT, () => console.log(`It's alive`))
