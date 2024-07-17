import BaseError from '../../base';
export default class UndefinedIconBackendError extends BaseError<[string]> {
    getMessage(backend: string): string;
}
