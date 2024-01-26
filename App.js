import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ChangeColor } from './src/screens/ChangeColor';

export default function App() {
  

  return (
    <View style={styles.container}>
      <ChangeColor />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
