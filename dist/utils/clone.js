const r = (e) => e === void 0 ? void 0 : JSON.parse(JSON.stringify(e)), n = (e) => {
  if (!Array.isArray(e) && Object.getPrototypeOf(e) !== Object.prototype)
    throw new Error(
      "Tried cloning instance of a class. Consider implementing clone method instead."
    );
  return r(e);
};
export {
  r as cloneAny,
  n as cloneObject
};
