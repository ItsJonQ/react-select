export function createUniqueIdFactory(prefix: string = 'component') {
  let id = 1;

  return () => {
    return `${prefix}-${id++}`;
  };
}
