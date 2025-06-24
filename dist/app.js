"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const books_routes_1 = require("./app/modules/books/books.routes");
const notfound_1 = require("./app/middleware/notfound");
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const borrow_route_1 = require("./app/modules/borrow/borrow.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// ! application api
app.use("/api", books_routes_1.BookRouters);
app.use("/api", borrow_route_1.BorrowRouters);
// ! general routes
app.get("/", (req, res) => {
    res.send("Library management API");
});
// ! API not found
app.use(notfound_1.notFound);
// ! global error handler
app.use(globalErrorHandler_1.default);
exports.default = app;
