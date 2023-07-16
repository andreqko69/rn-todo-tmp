import {TodoItem} from "../../../types";
import storage from "../../../storage";

const saveTodos = (todos: Array<TodoItem>) => storage.save({ id: 'todos', key: 'todos', data: todos });

export default saveTodos;
