export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface ITodoData {
  todos: ITodo[];
  total: number;
  skip: number;
  limit: number;
}
