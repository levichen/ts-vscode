
export default class IServiceResource {
  public name: string;
  public elbList: string[];
  public elbMetric: string[];

  constructor(name: string, elbList: string[], elbMetric: string[]) {
    this.name = name;
    this.elbList = elbList;
    this.elbMetric = elbMetric;
  }
}
