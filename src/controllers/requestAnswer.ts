import { RequestBase } from '@/const/requestBase';
import { Response } from 'express';
import { JSONSchema7 } from "json-schema";

type RequestAnswerBody = {
  answer: string
}

export const requestAnswerSchema: JSONSchema7 = {
  type: "object",
  additionalProperties: false,
  properties: {
    answer: { type: "string" }
  },
  required: ["answer"]
};

interface RequestAnswerRequest extends RequestBase<null, RequestAnswerBody, null> {
  body: RequestAnswerBody
}

export const requestAnswer = (req: RequestAnswerRequest, res: Response) => {
  const { answer } = req.body;
  res.json({ message: `Hello ${answer}` });
}