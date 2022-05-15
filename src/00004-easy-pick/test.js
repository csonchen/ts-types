function myPick(todo, keys) {
  const obj = {};
  keys.forEach(key => {
    if (key in todo) {
      todo[key] = keys[key];
    }
  });
  return obj;
}