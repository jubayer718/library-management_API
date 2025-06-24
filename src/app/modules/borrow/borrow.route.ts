import express from "express";
import { BorrowControllers } from "./borrow.controllers";

const router = express.Router();

router.post("/borrow", BorrowControllers.createBorrow);
router.get("/borrow", BorrowControllers.getBorrow);

export const BorrowRouters = router;