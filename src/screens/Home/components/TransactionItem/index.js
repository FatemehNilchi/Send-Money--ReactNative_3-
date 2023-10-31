import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';


const TransactionItem = ({iconName, title, date, amount, iconColor}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={[styles.iconBackground, {backgroundColor: iconColor}]}>
          <Icon name={iconName} size={15} color="#000" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <Text style={styles.amount}>${amount}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  paddingBottom: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  iconBackground: {
    borderRadius: 45,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column',
    rowGap: 8,
  },
  title: {
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
  },
  date: {
    fontSize: 10,
    color: '#aaa',
    fontWeight: '500',
  },
  amount: {
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
  },
});

export default TransactionItem;
