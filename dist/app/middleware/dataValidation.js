"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const books_validation_1 = require("../modules/books/books.validation");
const validateRequest = (req, res, next) => {
    const data = req.body;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const validatedData = books_validation_1.validatedBooks.parse(data);
    next();
};
exports.validateRequest = validateRequest;
