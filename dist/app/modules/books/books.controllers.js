"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookControllers = void 0;
const books_validation_1 = require("./books.validation");
const books_service_1 = require("./services/books.service");
// ! create book into db
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const validatedBookData = books_validation_1.validatedBooks.parse(data);
        const result = yield books_service_1.BookServices.createBookIntoDB(validatedBookData);
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// ! get all book from db
const getAllBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filter, sortBy, sort, limit } = req.query;
        const queryParams = {
            filter: filter,
            sortBy: sortBy,
            sort: sort,
            limit: limit ? Number(limit) : undefined,
        };
        const result = yield books_service_1.BookServices.getAllBooksFromDB(queryParams);
        res.status(200).json({
            success: true,
            message: "All books retrieve successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// ! get single book from db
const getSingleBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const result = yield books_service_1.BookServices.getSingleBookFromDB(bookId);
        res.status(200).json({
            success: true,
            message: "Book retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// ! delete book from db
const deleteBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        yield books_service_1.BookServices.deleteBookFromDB(bookId);
        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            data: null,
        });
    }
    catch (error) {
        next(error);
    }
});
// ! update book into db
const updateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const updatedData = req.body;
        const validatedUpdateBook = books_validation_1.validatedPartialBooks.parse(updatedData);
        const result = yield books_service_1.BookServices.updateBookIntoDB(bookId, validatedUpdateBook);
        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.BookControllers = {
    createBook,
    getAllBooks,
    getSingleBook,
    deleteBook,
    updateBook,
};
