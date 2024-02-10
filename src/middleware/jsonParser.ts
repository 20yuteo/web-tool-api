import { NextFunction, Request, Response } from "express-serve-static-core";

export const jsonParser = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (req.body instanceof Buffer) {
    try {
      const result = JSON.parse(req.body.toString());
      console.log(result);
      req.body = result;
    } catch (err) {
      console.info(err);
    }
  }

  next();
};
