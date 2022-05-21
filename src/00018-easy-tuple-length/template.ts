type Length<T extends readonly any[]> = T['length'];

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type t1 = typeof tesla;
type typeLength = Length<typeof tesla>;


