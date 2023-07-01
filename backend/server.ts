import express, { Express, Request, Response } from 'express';

const PORT = 8000;
const app: Express = express();
const port = PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});