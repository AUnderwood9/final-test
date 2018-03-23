"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _authorController = require("../controller/authorController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get("/", function (req, res, body) {
    (0, _authorController.getAuthors)().then(function (response) {
        res.send(response);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});

app.get("/:id", function (req, res, body) {
    var id = req.params.id;

    (0, _authorController.getAuthor)(id).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(err);
    });
});

app.post("/", function (req, res, body) {
    (0, _authorController.insertNewAuthor)([req.body.firstname, req.body.lastname]).then(function (response) {
        res.send(response.id.toString());
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});

app.delete("/:id", function (req, res, body) {
    var id = req.params.id;

    (0, _authorController.deleteAuthor)([id]).then(function () {
        res.sendStatus(200);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});

module.exports = app;