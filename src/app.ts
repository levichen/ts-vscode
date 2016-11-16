
import * as sourceMapSupport from "source-map-support";
sourceMapSupport.install();

class Foo {
  constructor() { this.bar(); }

  public bar() {
      throw new Error("this is a demo");
  }
}

let p = new Foo();

p.bar();
