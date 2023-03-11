import axios, {AxiosInstance} from 'axios';
import {StoreKeeper} from '../store';
import {commonSlice} from '../store/slices/common.slice';
import Messages from '../utils/Messages';

const isErrorArray = (error: string | string[]) => {
  if (Array.isArray(error)) return error[0];
  return error;
};

export default class BaseApi {
  private readonly request: AxiosInstance;
  private readonly messages = new Messages(commonSlice.actions.setMessage);
  protected token: string | null = null;
  protected dispatch: any = StoreKeeper.store.dispatch;

  constructor() {
    this.request = axios.create({
      baseURL:
        process.env.NODE_ENV === 'development'
          ? process.env.REACT_APP_BACKEND_URL_DEVELOPMENT
          : process.env.REACT_APP_BACKEND_URL_PRODUCTION,
      headers: {
        Authorization: `Bearer: ${StoreKeeper.store.getState()?.auth?.token}`,
      },
    });
    let loadingTimeout: NodeJS.Timeout;
    this.request.interceptors.request.use((config) => {
      loadingTimeout && clearTimeout(loadingTimeout);
      loadingTimeout = setTimeout(() => {
        StoreKeeper.store.dispatch(commonSlice.actions.setIsLoading(true));
      }, 500);
      return config;
    });
    this.request.interceptors.response.use(
      (success) => {
        clearTimeout(loadingTimeout);
        StoreKeeper.store.dispatch(commonSlice.actions.setIsLoading(false));
        const key =
          success.config.method! +
            '_' +
            success.config.url
              ?.split('/')
              .filter((s: string) => isNaN(Number(s)))
              .join('_') ?? '';
        this.messages.generateSuccess(key);
        return success;
      },
      (error) => {
        clearTimeout(loadingTimeout);
        // const is
        const serverErrorMessage = error.response.data.message;
        StoreKeeper.store.dispatch(commonSlice.actions.setIsLoading(false));
        const key =
          error.config.method! +
            '_' +
            error.config.url
              ?.split('/')
              .filter((s: string) => isNaN(Number(s)))
              .join('_') ?? '';

        this.messages.generateError(key, isErrorArray(serverErrorMessage));
        throw error;
      }
    );
  }

  updateHeader(token: string) {
    this.token = token;
  }

  protected headers(token: string, isMultipart?: boolean) {
    const storedToken = localStorage.getItem('token');
    const isTokenValid = !!storedToken?.length && storedToken;
    return {
      headers: {
        Authorization: `Bearer ${!isTokenValid ? StoreKeeper.store.getState()?.auth?.token : storedToken}`,
        'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
      },
    };
  }

  protected async get(url: string, token?: string, params?: any): Promise<any> {
    return this.request({
      url,
      method: 'GET',
      ...this.headers(token!),
      params,
    });
  }

  protected async post(url: string, data: any, token?: string, isMultipart?: boolean): Promise<any> {
    return this.request({
      url,
      method: 'POST',
      data,
      ...this.headers(token!, isMultipart),
    });
  }

  protected async put(url: string, data: any, token: string, isMultipart?: boolean, params?: any): Promise<any> {
    return this.request({
      url,
      method: 'PUT',
      data,
      params,
      ...this.headers(token!, isMultipart),
    });
  }

  protected async patch(url: string, data: any, token: string): Promise<any> {
    return this.request({
      url,
      method: 'PATCH',
      data,
      ...this.headers(token),
    });
  }

  protected async delete(url: string, token: string): Promise<any> {
    return this.request({
      url,
      method: 'DELETE',
      ...this.headers(token),
    });
  }
}
