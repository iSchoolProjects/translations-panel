import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  UpdateEvent,
  RemoveEvent,
  SoftRemoveEvent,
  RecoverEvent,
} from 'typeorm';
import {Language} from '../entity/language';
import {LanguageVersion} from '../entity/language-version';
import {LanguageVersionService} from '../service/language-version';

@EventSubscriber()
export class LanguageVersionSubscriber implements EntitySubscriberInterface {
  private readonly languageVersionService = new LanguageVersionService();
  /**
   * Called after entity insertion.
   */
  afterInsert(event: InsertEvent<any>) {
    console.log(`AFTER ENTITY INSERTED: `, event.entity);
    if (event.entity instanceof Language) {
      this.languageVersionService.create(event.entity);
    }
  }

  /**
   * Called after entity update.
   */
  afterUpdate(event: UpdateEvent<any>) {
    console.log(`AFTER ENTITY UPDATED: `, event.entity);
  }

  /**
   * Called after entity removal.
   */
  afterRemove(event: RemoveEvent<any>) {
    console.log(`AFTER ENTITY WITH ID ${event.entityId} REMOVED: `, event.entity);
  }

  /**
   * Called after entity removal.
   */
  afterSoftRemove(event: SoftRemoveEvent<any>) {
    console.log(`AFTER ENTITY WITH ID ${event.entityId} SOFT REMOVED: `, event.entity);
  }

  /**
   * Called after entity recovery.
   */
  afterRecover(event: RecoverEvent<any>) {
    console.log(`AFTER ENTITY WITH ID ${event.entityId} RECOVERED: `, event.entity);
  }
}
