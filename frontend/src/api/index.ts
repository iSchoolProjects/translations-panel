import {HomepageApi} from './app/homepage/homepage.api';
import BaseApi from './base.api';
import {EnumApi} from './general/enum.api';

export const baseApi = new BaseApi();

export const enumApi = new EnumApi();

export const homePageApi = new HomepageApi();
