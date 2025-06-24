/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { BookRouters } from "./app/modules/books/books.routes";
// import { BorrowRouters } from "./app/modules/borrow/borrow.routes";

import { notDeepEqual } from "assert";
import { notFound } from "./app/middleware/notfound";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
const app = express();

app.use(cors());
app.use(express.json());

// ! application api
app.use("/api", BookRouters);
// app.use("/api", BorrowRouters);

// ! general routes
app.get("/", (req: Request, res: Response) => {
  res.send("Library management API");
});

// ! API not found
app.use(notFound);

// ! global error handler
app.use(globalErrorHandler);

export default app;