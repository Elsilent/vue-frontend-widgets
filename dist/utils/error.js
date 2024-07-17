class s extends Error {
  constructor(...e) {
    super(), this.message = this.getMessage(...e), Object.setPrototypeOf(this, new.target.prototype);
  }
}
export {
  s as BaseError
};
