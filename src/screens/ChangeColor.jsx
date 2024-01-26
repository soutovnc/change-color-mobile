import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function ChangeColor() {
  const [ currentColor, setCurrentColor ] = useState('#3498db');

  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setCurrentColor(randomColor);
  }

  return (
    <TouchableOpacity onPress={changeColor} style={[styles.button, { backgroundColor: currentColor }]}>
        <Text style={styles.buttonText}>Touch here</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#40e0d0',
    padding: 100,
    borderRadius: 60,
  },
  buttonText: {
    color: '#ecf0f1',
    fontSize: 16,
  },
});
