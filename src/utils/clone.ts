/**
 * Clones any value by converting it to JSON and parsing it back
 */
export const cloneAny = <T>(any: T): T =>
  any === undefined ? undefined : JSON.parse(JSON.stringify(any));

/**
 * Clones object.
 *
 * Note that there is a check if object is instance of class.
 * In case of classes it is better to implement clone method manually
 * as cloning it through this function would simply produce a plain object,
 * not a clone of the instance, so no access to class methods.
 *
 * Perhaps if we would move project to TypeScript it would be good to make
 * a Cloneable interface.
 */
export const cloneObject = <T>(object: T): T => {
  if (!Array.isArray(object) && Object.getPrototypeOf(object) !== Object.prototype) {
    throw new Error(
      'Tried cloning instance of a class. Consider implementing clone method instead.',
    );
  }

  return cloneAny(object);
};
