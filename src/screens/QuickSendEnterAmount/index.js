import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import KeypadButton from './components/KeypadButton';
import Icon from 'react-native-vector-icons/Ionicons';
import QuickSendTemplate from '../../components/QuickSendTemplate';


const QuickSendEnterAmount = () => {


  const [amount, setAmount] = useState('');

  const handleKeyPress = key => {
    if (key === 'C') {
      setAmount('');
    } else if (key === '.') {
      if (!amount.includes('.')) {
        setAmount(prevAmount => prevAmount + key);
      }
    } else {
      setAmount(prevAmount => prevAmount + key);
    }
  };

  return (
    <QuickSendTemplate
      cancelButton={'Cancel'}
      nextButton={'Next'}
      prevPage={'Home'}
      cancelButtonOnPress={'Home'}
      nextButtonOnPress={'QuickSendAddDetails'}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.amount}>{amount ? `$${amount}` : ''}</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Available Balance:</Text>
            <Text style={styles.balanceAmount}>$8,251.36</Text>
          </View>
        </View>

        <View style={styles.keypad}>
          <View style={styles.row}>
            <KeypadButton label="1" onPress={() => handleKeyPress('1')} />
            <KeypadButton label="2" onPress={() => handleKeyPress('2')} />
            <KeypadButton label="3" onPress={() => handleKeyPress('3')} />
          </View>
          <View style={styles.row}>
            <KeypadButton label="4" onPress={() => handleKeyPress('4')} />
            <KeypadButton label="5" onPress={() => handleKeyPress('5')} />
            <KeypadButton label="6" onPress={() => handleKeyPress('6')} />
          </View>
          <View style={styles.row}>
            <KeypadButton label="7" onPress={() => handleKeyPress('7')} />
            <KeypadButton label="8" onPress={() => handleKeyPress('8')} />
            <KeypadButton label="9" onPress={() => handleKeyPress('9')} />
          </View>
          <View style={styles.row}>
            <KeypadButton label="." onPress={() => handleKeyPress('.')} />
            <KeypadButton label="0" onPress={() => handleKeyPress('0')} />
            <KeypadButton
              label={<Icon name="backspace" color="#000" size={24} />}
              onPress={() => handleKeyPress('C')}
            />
          </View>
        </View>
      </View>
    </QuickSendTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
  },
  header: {
    alignItems: 'center',
    marginTop: 25,
  },
  amount: {
    marginBottom: 8.5,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '700',
    color: '#000',
  },
  balanceContainer: {
    width: 250,
    paddingTop: 8.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginBottom: 25,
  },
  balanceLabel: {
    fontSize: 13,
    fontWeight: '400',
    color: '#728B9B',
  },
  balanceAmount: {
    fontSize: 11,
    fontWeight: '600',
    color: '#000',
  },
  keypad: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export default QuickSendEnterAmount;
