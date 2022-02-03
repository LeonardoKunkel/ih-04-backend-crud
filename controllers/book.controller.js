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
}
