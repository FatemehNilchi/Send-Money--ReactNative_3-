import React from 'react';
import {StyleSheet, TouchableOpacity,Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BigButton from '../BigButton';
import {useNavigation} from '@react-navigation/native';

const QuickSendTemplate = ({children,prevPage, cancelButton, nextButton,cancelButtonOnPress,nextButtonOnPress}) => {
  const nav = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        
        <TouchableOpacity onPress={() => nav.navigate(prevPage)}>
          <Icon name="return-up-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Quick Send</Text>
      </View>

      <View style={styles.mainContainer}>
        {children}

        <View style={styles.buttonContainer}>
          <BigButton buttonText={cancelButton} colorMode="white" buttonOnPress={() => nav.navigate(cancelButtonOnPress)} />
          <BigButton buttonText={nextButton} colorMode="blue" buttonOnPress={() => nav.navigate(nextButtonOnPress)}/>
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
    marginTop: 40,
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
