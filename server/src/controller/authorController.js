import express from "express";
import AuthorsTable from "../table";

const authorsTable = new AuthorsTable("authors");

function getAuthors(){
    return authorsTable.getAll();
}

function getAuthor(id){
    return authorsTable.getOne(id);
}

function insertNewAuthor(authorParams){
    return authorsTable.postProcedure("spInsertAuthor", authorParams);
}

function deleteAuthor(authorId){
    return authorsTable.putOrDeleteProcedure("spDeleteAuthor", authorId)
}

export {
    getAuthors,
    getAuthor,
    insertNewAuthor,
    deleteAuthor
}