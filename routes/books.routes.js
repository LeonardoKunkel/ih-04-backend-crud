const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/book.controller');

router.get('/', bookCtrl.getBooks)

module.exports = router;