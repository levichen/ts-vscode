
// import { AWS } from "aws-sdk";
// import Promise from "bluebird";
import  _ = require("lodash");

export default class AWSCloudWatch {
  public console(): void {
    let arr: number[] = [1, 2, 3, 4];

    _.map(arr, (element) => {
      console.log(element);
    });
  }
};
