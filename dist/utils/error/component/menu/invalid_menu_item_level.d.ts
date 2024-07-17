import BaseError from '../../base';
export default class UndefinedIconBackendError extends BaseError<[number]> {
    getMessage(level: number): string;
}
