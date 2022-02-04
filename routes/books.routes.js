const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/book.controller');

router.get('/', bookCtrl.getBooks)

router.get('/create', bookCtrl.createBooks);

router.post('/create', bookCtrl.createBooksForm);

router.get('/:bookID', bookCtrl.getSingleBook)

module.exports = router;