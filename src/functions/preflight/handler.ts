import express from 'express';
import serverless from 'serverless-http';
import { jsonParser } from '@/middleware/jsonParser';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Methods', 'Access-Control-Allow-Credentials', 'X-Amz-Date', 'X-Api-Key', 'X-Amz-Security-Token', 'X-Amz-User-Agent', 'X-Client-Version', 'X-Client-Path']
}))
app.use(jsonParser)

app.route('/preflight').options((_req, res) => {
  res.json({
    message: 'ok'
  });
})

export const main = serverless(app)