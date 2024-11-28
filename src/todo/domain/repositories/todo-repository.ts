import {Todo} from "../todo.model";

export abstract class TodoRepository {
  abstract getTodos(): Promise<Todo[]>;
  abstract createTodo(todo: Todo): Promise<Todo>;
  abstract updateTodo(todo: Todo): Promise<Todo>;
  abstract deleteTodo(todo: Todo): Promise<Todo>;
}