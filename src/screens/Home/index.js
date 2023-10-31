import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../../components/Card';
import ContactsProfile from '../../components/ContactsProfile';
import TransactionItem from './components/TransactionItem';
import SectionHeader from './components/SectionHeader';
import ContactSection from '../../components/ContactSection';
import styles from './styles';



export default function Home() {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="bell-o" size={20} color={'#000'} />
        <View style={styles.iconGroup}>
          <Icon name="line-chart" size={20} color={'#000'} />
          <Icon2 name="crown-outline" size={25} color={'#000'} />
        </View>
      </View>


      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.balanceText}>$8,251.36</Text>
        <Text style={styles.balanceSubText}>Avalible Balance</Text>

        <ContactSection SectionName={'Quick Send'}>
          <ContactsProfile contact="Charlotte" />
          <ContactsProfile contact="Eleanor" />
          <ContactsProfile contact="Hannah" />
          <ContactsProfile contact="James" />

          <TouchableOpacity style={styles.addContactButton} >
            <View style={styles.quickSendIcon}>
              <Icon name="plus" size={15} color="#000" />
            </View>
            <Text style={styles.quickSendText}>Add</Text>
          </TouchableOpacity>
        </ContactSection>


        <SectionHeader title="My Cards" />
        <View style={styles.cardRow}>
          <Card
            background="#0099FF"
            cash="$2,254.36"
            cardNumber="****9876"></Card>
          <Card
            background="#002BD0"
            cash="$4,144.43"
            cardNumber="****1345"></Card>
        </View>

        <SectionHeader title="Transitions" />

        <TransactionItem
          iconName="arrow-down-long"
          title="Cash Deposit"
          date="12 Aug, 2023 - 10:30 pm"
          amount="$5,412"
          iconColor="#FFC300"
        />

        <TransactionItem
          iconName="arrow-up-long"
          title="Transfer Fund"
          date="17 Oct, 2023 - 21:30 am"
          amount="$3,000"
          iconColor="#93D8FD"
        />
      </ScrollView>
    </View>
  );
}
