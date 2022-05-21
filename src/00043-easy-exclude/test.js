function MyExclude(T, U) {
  // const result = [];
  // for (let i = 0; i < T.length; i++) {
  //   let isEqual = false;
  //   for (let j = 0; j < U.length; j++) {
  //     if (T[i] === U[j]) {
  //       isEqual = true;
  //     }
  //   }
  //   if (!isEqual) {
  //     result.push(T[i]);
  //   }
  // }
  const result = T.filter(t => !U.includes(t));
  return result;
}