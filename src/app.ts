
import { GetConfig }  from "./libs/GetConfig";
import GetConfigFactory from "./libs/GetConfigFactory";
import IServiceResource from "./libs/IServiceResource";

let configFilePath: string = __dirname + "/../config/config.yml";

let configInstance: GetConfig = new GetConfigFactory(configFilePath).getInstance();

let config: IServiceResource[] = configInstance.getConfig(); 

console.log(config);
