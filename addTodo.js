import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, TouchableOpacity } from 'react-native';

export default function AddTodo({ submit }) {
  const [title, setText] = useState('');
  const change = val => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Write Your Todo........'
        onChangeText={val => change(val)}
        multiline={true}
      />

      <Button onPress={() => submit(title)} title='add todo ' color='orange' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  }
});
