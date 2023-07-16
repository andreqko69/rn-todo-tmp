import React, { useState, useEffect } from 'react';
import { Text, FlatList, ActivityIndicator, View } from "react-native";

import getTodos from "../../api/getTodos";
import { TodoItem } from "../../../../types";
import TodoListItem from "../TodoListItem/TodoListItem";
import TodoInput from "../TodoInput/TodoInput";
import HorizontalDivider from "../../../../components/HorizontalDivider/HorizontalDivider";
import saveTodos from "../../api/saveTodos";

const TodoList = () => {
  const [todos, setTodos] = useState<Array<TodoItem>>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);

      const initialTodos = await getTodos({ isInitialLoad: true });

      setTodos(initialTodos);
      setIsLoading(false);
    }

    fetchTodos();
  }, []);

  const handleTodoSubmit = ({ text }: { text: string }) => {
    const lastIndex= todos.length > 0 ? todos.length + 1 : 1;

    const newTodo = {
      id: `${Date.now()}`,
      isCompleted: false,
      index: lastIndex,
      text,
    };

    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
    saveTodos(newTodos);
  }

  if (isLoading) return (
    <ActivityIndicator size="large" />
  );

  const list = todos.length > 0 ? (
    <FlatList
      contentContainerStyle={styles.list}
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <TodoListItem item={item} />}
    />
  ) : <Text style={styles.text} >You have nothing to do...</Text>

  return (
    <View style={styles.container}>
      <TodoInput onSubmit={handleTodoSubmit} />
      <HorizontalDivider />
      {list}
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    gap: 8,
    width: '100%',
  },
  text: {
    fontSize: 20,
  },
  list: {
    flex: 1,
    gap: 10,
  }
}

export default TodoList;
