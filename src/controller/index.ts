import {EnumsController} from './enums';
import {LanguageController} from './language';
import {LanguageVersionController} from './language-version';
import {NamespaceController} from './namespaces';
import {TranslationsController} from './translations';
import {languageParams} from '../utilities/middleware/language-params';
import {Express} from 'express';
import {container} from '../inversify';

const routesMap = [
  {
    route: '/enums',
    controller: EnumsController,
    name: 'EnumsController',
  },
  ,
  {
    route: '/language',
    controller: LanguageController,
    name: 'LanguageController',
  },
  {
    route: '/language/:language/version',
    controller: LanguageVersionController,
    middleware: [languageParams],
    name: 'LanguageVersionController',
  },
  {
    route: '/language/:language/namespaces',
    controller: NamespaceController,
    middleware: [languageParams],
    name: 'NamespaceController',
  },
  {
    route: '/language/:language/namespaces/:namespace/translations',
    controller: TranslationsController,
    middleware: [languageParams],
    name: 'TranslationsController',
  },
];

export function registerRoutes(app: Express) {
  routesMap.forEach((route) => {
    const router = container.get<any>(route.controller);
    app.use(route.route, ...(route.middleware ?? []), router.attach(app));
  });
}
