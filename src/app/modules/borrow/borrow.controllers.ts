import { Request, Response } from "express";
import { BorrowServices } from "../books/services/brrow.service";


const createBorrow = async (req: Request, res: Response) => {
  const borrowData = req.body;
  const result = await BorrowServices.createBorrowIntoDB(borrowData);
  res.status(201).json({
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
};

const getBorrow = async (req: Request, res: Response) => {
  const result = await BorrowServices.getBorrowedBooks();
  res.status(201).json({
    success: true,
    message: "Borrowed book retrieve successfully",
    data: result,
  });
};

export const BorrowControllers = {
  createBorrow,
  getBorrow
};