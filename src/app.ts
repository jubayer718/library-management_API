/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { BookRouters } from "./app/modules/books/books.routes";
import { notDeepEqual } from "assert";
import { notFound } from "./app/middleware/notfound";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import { BorrowRouters } from "./app/modules/borrow/borrow.route";
const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req: Request, res: Response) => {
  res.send("Library management API");
});

app.use("/api", BookRouters);
app.use("/api", BorrowRouters);


app.use(notFound);

app.use(globalErrorHandler);

export default app;