import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';


const KeypadButton = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
});

export default KeypadButton;
