import {LanguageController} from './language';
import {LanguageVersionController} from './language-version';

const routesMap = [
  {
    route: '/language',
    controller: LanguageController,
  },
  {
    route: '/language-version',
    controller: LanguageVersionController,
  },
];

export function registerRoutes(app: any) {
  routesMap.forEach((route) => {
    app.use(route.route, new route.controller().attach(app));
  });
}
