type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoView = MyPick<Todo, 'title' | 'description'>

const todo: TodoView = {
  title: '标题',
  description: '描述'
}