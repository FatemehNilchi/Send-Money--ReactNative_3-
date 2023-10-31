import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BigButton from '../BigButton';


const QuickSendTemplate = ({children, bigButton1, bigButton2}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <Icon name="return-up-back-outline" size={30} color="#fff" />
        <Text style={styles.title}>Quick Send</Text>
      </View>

      <View style={styles.mainContainer}>
        {children}

        <View style={styles.buttonContainer}>
          <BigButton buttonText={bigButton1} colorMode="white" />
          <BigButton buttonText={bigButton2} colorMode="blue" />
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:4,
    backgroundColor: '#0099FF',
  },
  header: {
    paddingHorizontal: 30,
    marginTop: 30,
  },
  title: {
    marginVertical: 30,
    color: '#fff',
    fontSize: 36,
    fontWeight: '500',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: 10,
    paddingHorizontal: 30,
    marginBottom: 35,
    marginTop: 30,
  },
});

export default QuickSendTemplate;
