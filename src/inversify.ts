import {Container} from 'inversify';
import {LanguageVersionService} from './service/language-version';
import {LanguageService} from './service/language';
import NamespaceService from './service/namspace';
import TranslationsService from './service/translations';
import {LanguageVersionRepository} from './repository/version';
import {LanguageRepository} from './repository/language';
import {NamespaceRepository} from './repository/namespace';
import {TranslationRepository} from './repository/translations';
import {LanguageVersion} from './entity/language-version';
import {Language} from './entity/language';
import {Namespace} from './entity/namespace';
import {Translation} from './entity/translations';
import {LanguageVersionSubscriber} from './subscriber/language-version.subscriber';
import {LanguageVersionController} from './controller/language-version';
import {LanguageController} from './controller/language';
import {NamespaceController} from './controller/namespaces';
import {TranslationsController} from './controller/translations';
import {EnumsController} from './controller/enums';

interface Iinversify {
  component: any;
  key: string;
}

const controllers: Iinversify[] = [
  {
    key: 'LanguageVersionController',
    component: LanguageVersionController,
  },
  {key: 'LanguageController', component: LanguageController},
  {key: 'NamespaceController', component: NamespaceController},
  {key: 'TranslationsController', component: TranslationsController},
  {key: 'EnumsController', component: EnumsController},
];

const services: Iinversify[] = [
  {
    key: 'LanguageVersionService',
    component: LanguageVersionService,
  },
  {key: 'LanguageService', component: LanguageService},
  {key: 'NamespaceService', component: NamespaceService},
  {key: 'TranslationsService', component: TranslationsService},
];
const repositories: Iinversify[] = [
  {
    key: 'LanguageVersionRepository',
    component: LanguageVersionRepository,
  },
  {key: 'LanguageRepository', component: LanguageRepository},
  {key: 'NamespaceRepository', component: NamespaceRepository},
  {key: 'TranslationsRepository', component: TranslationRepository},
];

const entities: Iinversify[] = [
  {
    key: 'LanguageVersion',
    component: LanguageVersion,
  },
  {key: 'Language', component: Language},
  {key: 'Namespace', component: Namespace},
  {key: 'Translations', component: Translation},
];

const subscribers: Iinversify[] = [
  {
    key: 'LanguageVersionSubscriber',
    component: LanguageVersionSubscriber,
  },
];

export const container = new Container();

services.forEach((service) => {
  container.bind<any>(service.component).toSelf();
});

controllers.forEach((service) => {
  container.bind<any>(service.component).toSelf();
});

repositories.forEach((service) => {
  container.bind<any>(service.component).toSelf();
});

entities.forEach((service) => {
  container.bind<any>(service.component).toSelf();
});

subscribers.forEach((service) => {
  container.bind<any>(service.component).toSelf();
});
