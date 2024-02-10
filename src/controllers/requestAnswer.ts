import { RequestBase } from "@/const/requestBase";
import { Response } from "express";
import { JSONSchema7 } from "json-schema";
import { OpenAI } from "openai";

type RequestAnswerBody = {
  answer: string;
};

export const requestAnswerSchema: JSONSchema7 = {
  type: "object",
  properties: {
    answer: { type: "string", title: "answer" },
  },
  required: ["answer"],
  additionalProperties: false,
};

interface RequestAnswerRequest
  extends RequestBase<null, RequestAnswerBody, null> {
  body: RequestAnswerBody;
}

export const requestAnswer = (req: RequestAnswerRequest, res: Response) => {
  const { answer } = req.body;
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  res.json({ message: `Hello ${answer}` });
};
