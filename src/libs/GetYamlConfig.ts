
import { GetConfig } from "./GetConfig";
import IServiceResource from "./IServiceResource";

import * as fs from "fs";
import * as yaml from "js-yaml";

const ENCODE: string = "utf8";

export default class GetYamlConfig extends GetConfig {
  public getConfig(): IServiceResource[] {
    let config: string = fs.readFileSync(this._filePath, ENCODE);
    let json: any[] = yaml.safeLoad(config);

    return json.map((element) => {
      return new IServiceResource(element.NAME, element.ELB_LIST, element.ELB_METRIC);
    });
  }
}
