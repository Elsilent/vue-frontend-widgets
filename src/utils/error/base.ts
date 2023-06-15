export default abstract class BaseError<Args extends any[] = []> extends Error {
  constructor(...args: Args) {
    super();

    this.message = this.getMessage(...args);

    Object.setPrototypeOf(this, new.target.prototype);
  }

  protected abstract getMessage(...args: Args): string;
}
