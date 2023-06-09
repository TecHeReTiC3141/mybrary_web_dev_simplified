const express = require('express');
const router = express.Router();

const Book = require('../models/books');
const Author = require("../models/authors");

router.get('/', async (req, res) => {
    let books;

    try {

        books = await Book.findAll({
            order: [
                ['createdAt', 'DESC'],
            ],
            limit: 5,
        });

    } catch (err) {
        books = [];
    }
    res.render('index', {
        books
    });
});

module.exports = router;