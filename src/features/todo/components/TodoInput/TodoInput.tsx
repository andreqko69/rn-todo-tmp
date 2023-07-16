import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TodoInput = ({ onSubmit }: {
  onSubmit: ({ text }: { text: string }) => void
}) => {
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    await onSubmit({ text });
    setText('');
  }
  
  return (
    <View style={styles.container}>
      <TextInput
        onEndEditing={handleSubmit}
        style={styles.input}
        cursorColor="black"
        placeholder="What you want to do?"
        value={text}
        onChangeText={setText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    fontSize: 25,
    overflow: 'hidden',
    maxWidth: '100%',
  }
});

export default TodoInput;
