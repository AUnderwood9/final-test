import express from "express";
import { getBooks, getBook, addNewBook, deleteBook, changeBookCover } from "../controller/bookController";


const app = express();

app.get("/", (req, res, body) => {
    getBooks()
    .then((response) => {  
        res.send(response);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

app.get("/:id", (req, res, body) => {
    const id = req.params.id;

    // booksTable.getOne(id)
    getBook()
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(err);
    })
})

app.post("/", (req, res, body) => {
    addNewBook([req.body.authorid, req.body.name, req.body.cover])
    .then((response) => {
        res.send(response.id.toString())
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

app.delete("/:id", (req, res, body) => {
    console.log("--id--", req.params.id)
    const id = req.params.id;

    // booksTable.delete(id)
    deleteBook(id)
    .then(() => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    })
})

app.put("/cover", (req, res, body) => {

    // booksTable.putOrDeleteProcedure("spUpdateBookCover", [req.body.id, req.body.cover])
    changeBookCover([req.body.id, req.body.cover])
    .then((response) => {
        // console.log("--inserted--", response.id);
        res.send("ok")
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = app;