
import * as path from "path";

import { GetConfig }  from "./GetConfig";
import GetJsonConfig from "./GetJsonConfig";
import GetYAMLConfig from "./GetYamlConfig";

export default class GetConfigFactory {
  private _filePath: string;

  constructor(filepath: string) {
    this._filePath = filepath;
  }

  public getInstance(): GetConfig {
    let extension: string = path.extname(this._filePath);

    if (extension === ".json") {
      return new GetJsonConfig(this._filePath);
    } else if (extension === ".yml") {
      return new GetYAMLConfig(this._filePath);
    }
  }
}
