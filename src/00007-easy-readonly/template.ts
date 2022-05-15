type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

type User = {
  name: string;
  age: number;
}

const user: MyReadonly<User> = {
  name: 'a',
  age: 19
}

// user.age = 100
// user.name = 'b'