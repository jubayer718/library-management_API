import { NextFunction, Request, Response } from "express";
import { validatedBooks } from "../modules/books/books.validation";

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const validatedData = validatedBooks.parse(data);
    next()
}