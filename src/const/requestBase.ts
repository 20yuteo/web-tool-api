import { Request } from "express-serve-static-core";

export interface RequestBase<ReqParams, ReqBody, ReqQuery> extends Request<ReqParams, null, ReqBody, ReqQuery> {
  params: ReqParams
  body: ReqBody
  query: ReqQuery
}