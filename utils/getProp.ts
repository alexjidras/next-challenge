/**
 * getProp utility - an alternative to lodash.get
 * @author @harish2704, @muffypl, @pi0
 * @param {Object} object
 * @param {String} path
 * @param {*} defaultVal
 */
export function getProp(
  object: Record<string, unknown>,
  path: string,
  defaultVal?: unknown,
) {
  const dot = path.indexOf('.');

  if (object === undefined) {
    return defaultVal || undefined;
  }

  if (dot === -1) {
    if (path.length && path in object) {
      return object[path];
    }

    return defaultVal;
  }

  return getProp(
    object[path.substr(0, dot)] as Record<string, unknown>,
    path.substr(dot + 1),
    defaultVal,
  );
}
