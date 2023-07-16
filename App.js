import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import TodoList from "./src/features/todo/components/TodoList/TodoList";

export default function App() {
  return (
    <View style={styles.app}>
      <TodoList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    display: 'flex',
    alignItems: 'center',
  }
});
