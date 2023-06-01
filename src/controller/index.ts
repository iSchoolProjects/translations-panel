import {EnumsController} from './enums';
import {LanguageController} from './language';
import {LanguageVersionController} from './language-version';
import {NamespaceController} from './namespaces';
import {TranslationsController} from './translations';
import {languageParams} from '../utilities/middleware/language-params';
import {Express} from 'express';

const routesMap = [
  {
    route: '/enums',
    controller: EnumsController,
  },
  ,
  {
    route: '/language',
    controller: LanguageController,
  },
  {
    route: '/language/:language/version',
    controller: LanguageVersionController,
    middleware: [languageParams],
  },
  {
    route: '/language/:language/namespaces',
    controller: NamespaceController,
    middleware: [languageParams],
  },
  {
    route: '/language/:language/namespaces/:namespace/translations',
    controller: TranslationsController,
    middleware: [languageParams],
  },
];

export function registerRoutes(app: Express) {
  routesMap.forEach((route) => {
    app.use(route.route, ...(route.middleware ?? []), new route.controller().attach(app));
  });
}
