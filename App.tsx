import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';
import QuickSendEnterAmount from './src/screens/QuickSendEnterAmount';
import QuickSendAddDetails from './src/screens/QuickSendAddDetails';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Payments') {
            iconName = focused ? 'journal' : 'journal-outline';
          } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Wallet') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          }

          return (
            <Icon
              name= {iconName}
              size={20}
              color={focused ? '#1B1C1F' : '#7F94A4'}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          let label;

          if (route.name === 'Home') {
            label = 'Home';
          } else if (route.name === 'Payments') {
            label = 'Payments';
          } else if (route.name === 'Wallet') {
            label = 'Wallet';
          }

          return (
            <Text
              style={{
                color: focused ? '#1B1C1F' : '#7F94A4',
                fontSize: 12,
                fontWeight: '600',
              }}>
              {label}
            </Text>
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Payments" component={QuickSendEnterAmount} />
      <Tab.Screen name="Wallet" component={QuickSendAddDetails} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
