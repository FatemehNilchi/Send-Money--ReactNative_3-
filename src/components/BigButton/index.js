import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';


export default function BigButton({colorMode, buttonText}) {
  const buttonStyles =
    colorMode === 'white' ? styles.whiteButton : styles.blueButton;


  return (
    <TouchableOpacity style={[styles.button, buttonStyles]}>
      <Text style={[styles.buttonText, buttonStyles]}> {buttonText}</Text>
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  button: {
    height: 75,
    flex: 1,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  whiteButton: {
    backgroundColor: '#fff',
    color: '#000',

    borderColor: '#ccc',
  },
  blueButton: {
    backgroundColor: '#002BD0',
    color: '#fff',
    borderColor: '#002BD0',
  },
});
