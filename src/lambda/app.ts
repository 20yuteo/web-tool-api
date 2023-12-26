import express from 'express';
import * as serverless from 'serverless-http';

const app = express();
app.use(express.json())

app.get('/hello', (_req, res) => {
  res.json({ message: 'Hello World' });
});

export const main = serverless(app)
