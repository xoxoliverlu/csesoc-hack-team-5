import express, { Express, Request, Response } from 'express';
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://group5:<password>@memorylane.bjwio1u.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


const PORT = 8000;
const app: Express = express();
const port = PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});