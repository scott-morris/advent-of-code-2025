import path from 'path';

export default class RelativePath {
  private modulePath: string;

  constructor(moduleUrl: string) {
    this.modulePath = path.dirname(new URL(moduleUrl).pathname);
  }

  get dirName(): string {
    return this.modulePath;
  }

  relative(relativePath: string): string {
    return path.join(this.modulePath, relativePath);
  }
}
