const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/book.controller');

router.get('/', bookCtrl.getBooks)

router.get('/create', bookCtrl.createBooks);

router.post('/create', bookCtrl.createBooksForm);

router.get('/:bookID', bookCtrl.getSingleBook);

router.get('/:bookID/edit', bookCtrl.editBook);

router.post('/:bookID/edit', bookCtrl.editBookForm);

router.post('/:bookID/delete', bookCtrl.deleteBook);

module.exports = router;