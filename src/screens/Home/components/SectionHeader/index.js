import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const SectionHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.showAll}>Show All</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  showAll: {
    fontSize: 12,
    color: '#728B9B',
    fontWeight: '400',
  },
});

export default SectionHeader;
