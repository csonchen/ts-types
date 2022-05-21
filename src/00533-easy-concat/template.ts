type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type C1 = Concat<[1, 2, 3], [1]>

const c1: C1 = [1,2,3,1];


// Array.first

type MyFirst<T extends unknown[]> = T[0] extends T[number] ? T[0] : never;
type F1 = MyFirst<[1,2,3]>;

type MyTail<T extends unknown[]> = T extends [infer First, ...infer Tail] ? Tail : never;
type T1 = MyTail<[1,2,3]>;