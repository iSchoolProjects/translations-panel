import {NextFunction, Request, Response} from 'express';

export const isJSONMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).send({
      message: 'Invalid JSON',
    });
  }
  next();
};
