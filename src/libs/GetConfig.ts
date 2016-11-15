
import IServiceResource from "./IServiceResource";

export abstract class GetConfig {
  protected _filePath: string;

  constructor(filepath: string) {
    this._filePath = filepath;
  }

  public abstract getConfig(): IServiceResource[];
}
