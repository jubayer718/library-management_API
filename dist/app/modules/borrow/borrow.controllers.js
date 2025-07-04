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
exports.BorrowControllers = void 0;
const brrow_service_1 = require("../../services/brrow.service");
const createBorrow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const borrowData = req.body;
    const result = yield brrow_service_1.BorrowServices.createBorrowIntoDB(borrowData);
    res.status(201).json({
        success: true,
        message: "Book borrowed successfully",
        data: result,
    });
});
const getBorrow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield brrow_service_1.BorrowServices.getBorrowedBooks();
    res.status(201).json({
        success: true,
        message: "Borrowed book retrieve successfully",
        data: result,
    });
});
exports.BorrowControllers = {
    createBorrow,
    getBorrow
};
