import {StoreKeeper} from '../store';
import {TypeEnum} from '../store/slices/common.slice';
import {errorResponses, messagesMap, successResponses} from './toast-messages';

export default class Messages {
  private readonly messages = messagesMap;
  private readonly successResponses = successResponses;
  private readonly errorResponses = errorResponses;
  private readonly store = StoreKeeper.store.dispatch;
  private action: any;

  constructor(action: any) {
    this.action = action;
  }

  public generateError(key: string, fallback: string) {
    const messageKey = this.errorResponses[key];
    const message = this.getMessage(messageKey);
    if (!messageKey || !message) {
      this.dispatch({
        type: TypeEnum.error,
        text: fallback,
      });
    } else {
      this.dispatch(message);
    }
  }

  public generateSuccess(key: string) {
    const messageKey = this.successResponses[key];
    const message = this.getMessage(messageKey);
    this.dispatch(message);
  }

  private dispatch(message: any) {
    if (!message) return;
    this.store(this.action(message));
  }

  private getMessage(messageStatus: string) {
    return this.messages[messageStatus];
  }
}
