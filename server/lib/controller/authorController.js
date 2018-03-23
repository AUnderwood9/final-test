"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteAuthor = exports.insertNewAuthor = exports.getAuthor = exports.getAuthors = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _table = require("../table");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authorsTable = new _table2.default("authors");

function getAuthors() {
    return authorsTable.getAll();
}

function getAuthor(id) {
    return authorsTable.getOne(id);
}

function insertNewAuthor(authorParams) {
    return authorsTable.postProcedure("spInsertAuthor", authorParams);
}

function deleteAuthor(authorId) {
    return authorsTable.putOrDeleteProcedure("spDeleteAuthor", authorId);
}

exports.getAuthors = getAuthors;
exports.getAuthor = getAuthor;
exports.insertNewAuthor = insertNewAuthor;
exports.deleteAuthor = deleteAuthor;