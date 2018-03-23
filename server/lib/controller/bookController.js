"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changeBookCover = exports.deleteBook = exports.addNewBook = exports.getBook = exports.getBooks = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _table = require("../table");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var booksTable = new _table2.default("books");

function getBooks() {
    return booksTable.getAll();
}

function getBook(id) {
    return booksTable.getOne(id);
}

function addNewBook(bookParams) {
    return booksTable.postProcedure("spInsertBook", bookParams);
}

function deleteBook(bookId) {
    return booksTable.delete(bookId);
}

function changeBookCover(coverUrl) {
    return booksTable.putOrDeleteProcedure("spUpdateBookCover", coverUrl);
}

exports.getBooks = getBooks;
exports.getBook = getBook;
exports.addNewBook = addNewBook;
exports.deleteBook = deleteBook;
exports.changeBookCover = changeBookCover;