export default abstract class BaseError<Args extends any[] = []> extends Error {
    constructor(...args: Args);
    protected abstract getMessage(...args: Args): string;
}
