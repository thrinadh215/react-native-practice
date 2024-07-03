import React, { useState } from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [bgColor, setBgColor] = useState('rgb(255,255,255)');

  const handle = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setBgColor(`rgb(${r},${g},${b})`);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.text}>{bgColor}</Text>
      
      <Button title='CLICK ME' onPress={handle}  color={"rgb(225,0,0)"} />
      
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize:30,
  },
});
