import express from "express";
import {
  requestAnswer,
  requestAnswerSchema,
} from "./controllers/requestAnswer";
import { Validator } from "express-json-validator-middleware";

const router = express.Router();
const { validate } = new Validator({ allErrors: true });

router.get("/hello", (_req, res) => {
  res.json({ message: "Hello World" });
});

router.post("/request", validate({ body: requestAnswerSchema }), requestAnswer);

export default router;
