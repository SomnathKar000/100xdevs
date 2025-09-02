export function assignIfDefined(
  obj: Record<string, any>,
  key: string,
  value: string
) {
  if (value !== undefined) {
    obj[key] = value;
  }
}
