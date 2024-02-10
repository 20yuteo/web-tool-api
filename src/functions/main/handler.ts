import express from "express";
import serverless from "serverless-http";
import router from "@/routes";
import { jsonParser } from "@/middleware/jsonParser";
import cors from "cors";
import { jsonWebToken } from "@/middleware/jsonWebToken";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
      "Origin",
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Methods",
      "Access-Control-Allow-Credentials",
      "X-Amz-Date",
      "X-Api-Key",
      "X-Amz-Security-Token",
      "X-Amz-User-Agent",
      "X-Client-Version",
      "X-Client-Path",
      "Authorization",
    ],
  })
);
app.use(jsonWebToken);
app.use(jsonParser);
app.use(router);

export const main = serverless(app);
