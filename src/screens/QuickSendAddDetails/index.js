import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../../components/Card';
import QuickSendTemplate from '../../components/QuickSendTemplate';
import ContactSection from '../../components/ContactSection';
import ContactsProfile from '../../components/ContactsProfile';


const QuickSendAddDetails = () => {


  return (
    <QuickSendTemplate
      cancelButton={'Cancel'}
      nextButton={'Send Money'}
      prevPage={'QuickSendEnterAmount'}
      cancelButtonOnPress={'Home'}
      nextButtonOnPress={'Home'}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.balance}>$254.87</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Available Balance:</Text>
            <Text style={styles.balanceAmount}>$8,251.36</Text>
          </View>
        </View>

        <ContactSection SectionName={'Contacts'}>
          <ContactsProfile contact="Charlotte" />
          <ContactsProfile contact="Eleanor" />
          <ContactsProfile contact="Hannah" />
          <ContactsProfile contact="James" />
          <ContactsProfile contact="Anna" />
        </ContactSection>

        <View style={styles.cardsHeader}>
          <Text style={styles.cardsHeaderText}>My Cards</Text>
          <TouchableOpacity>
            <View style={styles.showAllButton}>
              <Icon name="plus" size={12} color="#000" />
              <Text style={styles.showAllButtonText}>Show All</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.cardRow}>
          <Card
            background="#0099FF"
            cash="$2,254.36"
            cardNumber="****9876"></Card>
          <Card
            background="#002BD0"
            cash="$4,144.43"
            cardNumber="****1345"></Card>
          <Card
            background="#FFC300"
            cash="$2,254.36"
            cardNumber="****9876"></Card>
          <Card
            background="#002BD0"
            cash="$4,144.43"
            cardNumber="****1345"></Card>
        </View>
      </ScrollView>
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
  balance: {
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
    columnGap: 3,
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
  cardsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 15,
  },
  cardsHeaderText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  showAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    backgroundColor: '#93D8FD',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 18,
  },
  showAllButtonText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '400',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
    paddingHorizontal: 30,
  },
});

export default QuickSendAddDetails;
