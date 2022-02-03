const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/book.controller');

router.get('/', bookCtrl.getBooks)

router.get('/create', bookCtrl.createBooks)

module.exports = router;