import BaseError from './base';
export default class UndefinedThemeError extends BaseError<[string]> {
    getMessage(theme: string): string;
}
