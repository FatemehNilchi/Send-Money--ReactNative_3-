import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity,Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const containerWidth = (windowWidth / 2) - 35;


export default function Card({background, cash, cardNumber}) {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: background}]}>
      <Image
        source={require('../../images/credit-card.png')}
        style={styles.image}
      />
      <Text style={styles.cash}>{cash}</Text>
      <Text style={styles.cardNumber}>{cardNumber}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    width:containerWidth,
    borderRadius: 15,
    padding: 15,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '400',
  },
  cash: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
  },
  image: {
    width: 56,
    height: 36,
    marginBottom: 20,
  },
});
