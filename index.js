// 1. Importaciones
const express = require('express');
const app = express();


// 2. Middelwares
require('dotenv').config()

app.listen(process.env.PORT, () => console.log(`It's alive`))
