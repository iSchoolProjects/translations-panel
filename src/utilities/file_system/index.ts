import {injectable} from 'inversify';
import fs from 'fs';
import path from 'path';
@injectable()
export class FSUtils {
  private readonly fs = fs;
  private readonly path = path;
  private readonly basePath: string;

  constructor(basePath?: string) {
    this.basePath = basePath ?? 'translations';
  }

  private joinPath(path: string) {
    return this.path.join(this.basePath, path);
  }
  public createDirectory(name: string) {
    const path = this.joinPath(name);
    if (!this.fs.existsSync(path)) {
      return this.fs.mkdirSync(path, {
        recursive: true,
      });
    }
  }
}
