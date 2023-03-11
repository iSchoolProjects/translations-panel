import {TypeEnum} from '../store/slices/common.slice';

export const messagesMap: {[key: string]: any} = {
  postloginSuccess: {
    text: 'Welcome back!',
    type: TypeEnum.success,
  },
};

export const successResponses: {[key: string]: string} = {
  post_api_signin: 'postloginSuccess',
};

export const errorResponses: {[key: string]: string} = {
  postsignin: 'postloginError',
};
