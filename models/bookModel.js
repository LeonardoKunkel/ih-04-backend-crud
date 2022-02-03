// 1. Importación
const mongoose = require('mongoose');

// 2. Schema
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

// 3. Modelo
const Book = mongoose.model('Book', bookSchema);

// 4. Exportación
module.exports = Book;
