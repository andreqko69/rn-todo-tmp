import generateRandomIntegerFromRange from "../../../utils/generateRandomIntegerFromRange";
import { TodoItem } from "../../../types";
import storage from "../../../storage";

const getTodos = ({ isInitialLoad = false }: { isInitialLoad?: boolean } = {}): Promise<Array<TodoItem>> => new Promise(async resolve => {
  try {
    // will throw an exception if there is no data in storage
    const todos = await storage.load({ id: 'todos', key: 'todos' });
    const resolvingTimeInSeconds = isInitialLoad ? generateRandomIntegerFromRange({ min: 2, max: 5 }) : 0;
    const resolvingTimeInMilliseconds = resolvingTimeInSeconds * 1000;

    setTimeout(() => {
      resolve(todos);
    }, resolvingTimeInMilliseconds);
  } catch {
    resolve([]);
  }
});

export default getTodos;
