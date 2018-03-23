import express from "express";
import BooksTable from "../table";

const booksTable = new BooksTable("books");

function getBooks(){
    return booksTable.getAll();
}

function getBook(id){
    return booksTable.getOne(id);
}

function addNewBook(bookParams){
    return booksTable.postProcedure("spInsertBook", bookParams);
}

function deleteBook(bookId){
    return booksTable.delete(bookId)
}

function changeBookCover(coverUrl){
    return booksTable.putOrDeleteProcedure("spUpdateBookCover", coverUrl)
}

export {
    getBooks,
    getBook,
    addNewBook,
    deleteBook,
    changeBookCover
}