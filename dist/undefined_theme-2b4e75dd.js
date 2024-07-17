import { BaseError as r } from "./utils/error.js";
class t extends r {
  getMessage(e) {
    return `Undefined theme: ${e}`;
  }
}
export {
  t as U
};
