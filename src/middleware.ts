import { Request, Response, NextFunction } from "express";

export const loggingMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("ip:", req.ip);
  next();
};
