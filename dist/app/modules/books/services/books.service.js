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
exports.BookServices = void 0;
const books_model_1 = require("../../../model/booksModel/books.model");
// ! post request
const createBookIntoDB = (book) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Books.create(book);
    return result;
});
// !get request, retrieve all books
const getAllBooksFromDB = (queryParams) => __awaiter(void 0, void 0, void 0, function* () {
    const { filter, sortBy, sort, limit } = queryParams;
    const queryObject = {};
    if (filter) {
        queryObject.genre = { $regex: filter, $options: "i" };
    }
    const baseQuery = books_model_1.Books.find(queryObject);
    if (sortBy) {
        const sortOrder = sort === "desc" ? -1 : 1;
        baseQuery.sort({ [sortBy]: sortOrder });
    }
    baseQuery.limit(limit !== null && limit !== void 0 ? limit : 10);
    const result = yield baseQuery;
    return result;
});
// ! single book retrieve from db
const getSingleBookFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Books.findById(id);
    return result;
});
// ! delete book from db
const deleteBookFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Books.findByIdAndDelete(id);
    return result;
});
// ! update book from db
const updateBookIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Books.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
exports.BookServices = {
    createBookIntoDB,
    getAllBooksFromDB,
    getSingleBookFromDB,
    deleteBookFromDB,
    updateBookIntoDB,
};
