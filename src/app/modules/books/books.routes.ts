import express from "express";
import { BookControllers } from "./books.controllers";

const router = express.Router();


router.post("/books", BookControllers.createBook);
router.get("/books/:bookId", BookControllers.getSingleBook);
router.delete("/books/:bookId", BookControllers.deleteBook)
router.patch("/books/:bookId", BookControllers.updateBook)
router.get("/books", BookControllers.getAllBooks);





export const BookRouters = router;