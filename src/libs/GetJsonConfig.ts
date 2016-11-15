
import { GetConfig } from "./GetConfig";
import IServiceResource from "./IServiceResource";

import * as fs from "fs";

const ENCODE: string = "utf8";

export default class GetJsonConfig extends GetConfig {
  public getConfig(): IServiceResource[] {
    let config: any[] = JSON.parse(fs.readFileSync(this._filePath, ENCODE));

    return config.map((element) => {
      return new IServiceResource(element.NAME, element.ELB_LIST, element.ELB_METRIC);
    });
  }
}
