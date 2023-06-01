import {NextFunction, Request, Response} from 'express';
import {InalidValueError, PayloadError} from '../errors/custom-error';
import countries from '../../../list.json';

export const languageParams = (req: Request, res: Response, next: NextFunction) => {
  const langauge = req.params.language;
  if (!langauge) return res.status(400).json({message: new PayloadError('Country code')});
  const findCountry = countries.find((country) => country.code === langauge);
  if (!findCountry) return res.status(400).json({message: new InalidValueError(langauge, 'code')});
  next();
};
