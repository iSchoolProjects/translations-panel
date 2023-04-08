import {EnumsController} from './enums';
import {LanguageController} from './language';
import {LanguageVersionController} from './language-version';
import {NamespaceController} from './namespaces';
import {TranslationsController} from './translations';

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
    route: '/language-version',
    controller: LanguageVersionController,
  },
  {
    route: '/namespaces',
    controller: NamespaceController,
  },
  {
    route: '/translations',
    controller: TranslationsController,
  },
];

export function registerRoutes(app: any) {
  routesMap.forEach((route) => {
    app.use(route.route, new route.controller().attach(app));
  });
}
