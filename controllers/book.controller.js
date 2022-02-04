const res = require('express/lib/response');
const Book = require('../models/bookModel');

exports.getBooks = async (req, res) => {

    try {
        const foundBooks = await Book.find({});

        res.render('books/list', {
            data: foundBooks
        })
    } catch (error) {
        console.log(error);
    }
};

exports.createBooks = async (req, res) => {
    res.render('books/create')
};

exports.createBooksForm = async (req, res) => {
    const { title, description, author, rating } = req.body;

    try {
        const newBook = await Book.create({ title, description, author, rating})
        res.redirect('/books');
    } catch (error) {
        console.log(error);
        return
    }
}

exports.getSingleBook = async (req, res) => {

    // 1. Saber cuál libro queremos leer. Obtener el identificador
    const { bookID } = req.params

    // 2. Realizar búsqueda del libro imdividual a través de su id
    const getTheBook = await Book.findById(bookID)

    // 3. Renderizar la página
    res.render('books/single', {
        book: getTheBook
    })
    console.log(getTheBook);
}

exports.editBook = async (req, res) => {
    const { bookID } = req.params;
    const foundBook = await Book.findById(bookID);
    res.render('books/edit', { book: foundBook })
}

exports.editBookForm = async (req, res) => {
    const { bookID } = req.params;
    const { title, description, author, rating } = req.body
    const updateBook = await Book.findByIdAndUpdate(
        bookID,
        { title, description, author, rating },
        { new: true }
    )
    console.log(updateBook);
    return res.redirect(`/books/${updateBook._id}`)
}

exports.deleteBook = async (req, res) => {
    const { bookID } = req.params;
    await Book.findByIdAndDelete(bookID);
    return res.redirect('/books')
}
