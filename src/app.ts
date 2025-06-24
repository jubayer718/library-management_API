import express, { Request, Response } from 'express';
import cors from 'cors'
import { notFound } from './app/middleware/notfound';

const app = express();

// middleware

app.use(express.json());
app.use(cors())


app.get("/", (req: Request, res: Response) => {
  res.send("Library management API")
})

app.use(notFound);

export default app;
