import { UserRepository } from "@/domain/repositories/userRepository/userRepository";
import { NextFunction, Request, Response } from "express-serve-static-core";
import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";

const jwksUrl = "https://dev--5d5d4yp.us.auth0.com/.well-known/jwks.json";

const issuer = "https://dev--5d5d4yp.us.auth0.com/";

const audience = "http://localhost:8000";
export const jsonWebToken = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const userRepository = new UserRepository(issuer);

  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.decode(token, { complete: true });
    if (!decoded) {
      return next();
    }

    const client = jwksClient({
      jwksUri: jwksUrl,
    });

    const key = await client.getSigningKey(decoded.header.kid);
    const publicKey = key.getPublicKey();

    const decodedToken = jwt.verify(token, publicKey, {
      audience,
      issuer,
    });

    let sub: string;

    if (typeof decodedToken.sub === "function") {
      sub = decodedToken.sub();
    } else {
      sub = decodedToken.sub;
    }

    console.log({ sub });

    const isExist = await userRepository.isExist(sub);
    console.log({ isExist });

    req.signedCookies = {
      ...req.signedCookies,
      scope: decodedToken["scope"],
      permissions: decodedToken["permissions"],
    };
  } catch (err) {
    console.info(err);
  }

  next();
};
