"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _books = require("./books");

var _books2 = _interopRequireDefault(_books);

var _authors = require("./authors");

var _authors2 = _interopRequireDefault(_authors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use("/books", _books2.default);
router.use("/authors", _authors2.default);

module.exports = router;