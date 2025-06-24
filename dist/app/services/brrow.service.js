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
exports.BorrowServices = void 0;
const books_model_1 = require("../model/booksModel/books.model");
const brrow_model_1 = require("../model/brrowModel/brrow.model");
const createBorrowIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //! Static method implementation
    const book = yield books_model_1.Books.findById(payload.book);
    if (!book) {
        throw new Error("Book not found");
    }
    if (book.copies < payload.quantity) {
        throw new Error("Insufficient book stock");
    }
    book.copies -= payload.quantity;
    if (book.copies === 0) {
        book.available = false;
    }
    // ! instance method implementation
    yield book.save();
    //! Static method implementation
    const result = yield brrow_model_1.Borrow.create(payload);
    return result;
});
const getBorrowedBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield brrow_model_1.Borrow.aggregate([
        {
            $group: {
                _id: "$book",
                totalQuantity: { $sum: "$quantity" },
            },
        },
        {
            $lookup: {
                from: "books",
                localField: "_id",
                foreignField: "_id",
                as: "bookDetails",
            },
        },
        {
            $unwind: "$bookDetails",
        },
        {
            $project: {
                _id: 0,
                book: "$_id",
                totalQuantity: 1,
                bookDetails: {
                    title: "$bookDetails.title",
                    isbn: "$bookDetails.isbn",
                },
            },
        },
    ]);
    return result;
});
exports.BorrowServices = {
    createBorrowIntoDB,
    getBorrowedBooks
};
