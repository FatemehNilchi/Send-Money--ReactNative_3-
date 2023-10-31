import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


export default function ContactSection({children, SectionName}) {
  return (
    <View >
      <Text style={styles.sectionTitle}>{SectionName}</Text>
      <View style={styles.contactRow}>{children}</View>
    </View>
  );
}


const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    marginBottom: 15,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
