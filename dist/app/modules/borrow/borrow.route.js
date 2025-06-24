"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRouters = void 0;
const express_1 = __importDefault(require("express"));
const borrow_controllers_1 = require("./borrow.controllers");
const router = express_1.default.Router();
router.post("/borrow", borrow_controllers_1.BorrowControllers.createBorrow);
router.get("/borrow", borrow_controllers_1.BorrowControllers.getBorrow);
exports.BorrowRouters = router;
