import express from 'express';
import serverless from 'serverless-http';
import router from '@/routes';
import { jsonParser } from '@/middleware/jsonParser';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://web-tool-client-git-feature-connect-to-api-20yuteo.vercel.app//',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 200
}))
app.use(jsonParser)
app.use(router)

export const main = serverless(app)