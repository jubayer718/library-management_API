"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRouters = void 0;
const express_1 = __importDefault(require("express"));
const books_controllers_1 = require("./books.controllers");
const router = express_1.default.Router();
router.post("/books", books_controllers_1.BookControllers.createBook);
router.get("/books/:bookId", books_controllers_1.BookControllers.getSingleBook);
router.delete("/books/:bookId", books_controllers_1.BookControllers.deleteBook);
router.patch("/books/:bookId", books_controllers_1.BookControllers.updateBook);
router.get("/books", books_controllers_1.BookControllers.getAllBooks);
exports.BookRouters = router;
