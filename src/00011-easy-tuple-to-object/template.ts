type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y', 1] as const;

type result = TupleToObject<typeof tuple>;