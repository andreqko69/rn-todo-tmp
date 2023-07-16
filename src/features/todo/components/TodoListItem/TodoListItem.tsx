import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from "react-native";
import { TodoItem } from "../../../../types";
import getTodos from "../../api/getTodos";
import saveTodos from "../../api/saveTodos";

const TodoListItem = ({ item }: { item: TodoItem }) => {
  const [todo, setTodo] = useState<TodoItem>(item);

  const handlePress = async () => {
    const todos = await getTodos();
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    const updatedTodos = todos.map(td => td.id === td.id ? updatedTodo : td);

    setTodo(updatedTodo);
    saveTodos(updatedTodos);
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.highlight} onPress={handlePress} activeOpacity={0.4} underlayColor="#DDDDDD">
        <View>
          <Text
            style={{ ...styles.text, textDecorationLine: todo.isCompleted ? 'line-through' : 'none'  }}
            numberOfLines={1}
          >
            {todo.index} {todo.text}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  text: {
    fontSize: 25,
  },
  highlight: {
    width: '100%'
  }
});

export default TodoListItem;
