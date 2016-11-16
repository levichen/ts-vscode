
export default class Greeter {
  private greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  public greet() {
    throw new Error("test");
  }
};
