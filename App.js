import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [ currentColor, setCurrentColor ] = useState('#3498db');

  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setCurrentColor(randomColor);
  }

  return (
    <View style={[styles.container, { backgroundColor: currentColor }]}>
      <TouchableOpacity onPress={changeColor} style={styles.button}>
        <Text style={styles.buttonText}>Trocar cor Lolo!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#40e0d0',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ecf0f1',
    fontSize: 16,
  },
});
