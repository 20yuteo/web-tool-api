import express from 'express';
import serverless from 'serverless-http';
import router from '@/routes';
import { jsonParser } from '@/middleware/jsonParser';

const app = express();
app.use(express.json());
app.use(jsonParser)
app.use(router)

export const main = serverless(app)