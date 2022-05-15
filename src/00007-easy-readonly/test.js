function myReadonly(obj) {
  const result = {};
  for (const key in obj) {
    result['readonly ' + key] = obj[key];
  }
  return result;
}