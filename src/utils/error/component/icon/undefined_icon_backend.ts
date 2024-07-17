import BaseError from '../../base';

export default class UndefinedIconBackendError extends BaseError<[string]> {
  getMessage(backend: string) {
    return `Undefined icon backend: ${backend}`;
  }
}
