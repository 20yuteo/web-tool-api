import { NextFunction, Request, Response } from "express-serve-static-core";

export const jsonParser = (req: Request, res: Response, next: NextFunction) => {
  if (req.body instanceof Buffer) {
    try {
      req.body = JSON.parse(req.body.toString());
    } catch (err) {
      return res.status(400).json({ error: 'Invalid JSON data' });
    }
  }

  next();
};