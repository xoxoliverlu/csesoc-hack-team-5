import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://group5:PuQRWuYgeMalZcNn@memorylane.bjwio1u.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("connected to mongodb"))
  .catch((err: any) => console.log(err));

const PORT = 8000;
const app: Express = express();
const port = PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
