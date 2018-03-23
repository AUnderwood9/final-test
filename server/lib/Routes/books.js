"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bookController = require("../controller/bookController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get("/", function (req, res, body) {
    (0, _bookController.getBooks)().then(function (response) {
        res.send(response);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});

app.get("/:id", function (req, res, body) {
    var id = req.params.id;

    // booksTable.getOne(id)
    (0, _bookController.getBook)().then(function (response) {
        res.send(response);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(err);
    });
});

app.post("/", function (req, res, body) {
    (0, _bookController.addNewBook)([req.body.authorid, req.body.name, req.body.cover]).then(function (response) {
        res.send(response.id.toString());
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});

app.delete("/:id", function (req, res, body) {
    console.log("--id--", req.params.id);
    var id = req.params.id;

    // booksTable.delete(id)
    (0, _bookController.deleteBook)(id).then(function () {
        res.sendStatus(200);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});

app.put("/cover", function (req, res, body) {

    // booksTable.putOrDeleteProcedure("spUpdateBookCover", [req.body.id, req.body.cover])
    (0, _bookController.changeBookCover)([req.body.id, req.body.cover]).then(function (response) {
        // console.log("--inserted--", response.id);
        res.send("ok");
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});

module.exports = app;