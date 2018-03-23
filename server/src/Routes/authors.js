import express from "express";
import { getAuthor, getAuthors, deleteAuthor, insertNewAuthor } from "../controller/authorController";


const app = express();

app.get("/", (req, res, body) => {
    getAuthors()
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

    getAuthor(id)
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(err);
    })
})

app.post("/", (req, res, body) => {
    insertNewAuthor([req.body.firstname, req.body.lastname])
    .then((response) => {
        res.send(response.id.toString())
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

app.delete("/:id", (req, res, body) => {
    const id = req.params.id;

    deleteAuthor([id])
    .then(() => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    })
})

module.exports = app;