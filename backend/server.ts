import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";

const PORT = 8000;
const app: Express = express();
const port = PORT;
mongoose
  .connect(
    "mongodb+srv://group5:PuQRWuYgeMalZcNn@memorylane.bjwio1u.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to mongodb"))
  .catch((err: any) => console.log(err));

app.post("/")

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
