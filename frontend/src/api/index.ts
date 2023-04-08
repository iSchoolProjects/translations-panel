import {LanguageApi} from './app/language/language.api';
import BaseApi from './base.api';
import {EnumApi} from './general/enum.api';

export const baseApi = new BaseApi();

export const enumApi = new EnumApi();

export const languageApi = new LanguageApi();
