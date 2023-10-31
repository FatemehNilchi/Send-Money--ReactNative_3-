import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';


export default ContactsProfile = ({contact}) => {
  const imagePaths = {
    James: require('../../images/contacts/James.png'),
    Hannah: require('../../images/contacts/Hannah.png'),
    Eleanor: require('../../images/contacts/Eleanor.png'),
    Anna: require('../../images/contacts/Anna.png'),
    Charlotte: require('../../images/contacts/Charlotte.png'),
  };


  return (
    <TouchableOpacity style={styles.container}>
      <Image source={imagePaths[contact]} style={styles.image} />

      <Text style={styles.name}>{contact}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 12,
    color: '#000',
    fontWeight: '400',
  },
});
