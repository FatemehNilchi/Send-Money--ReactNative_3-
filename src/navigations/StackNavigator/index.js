import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import QuickSendEnterAmount from '../../screens/QuickSendEnterAmount';
import QuickSendAddDetails from '../../screens/QuickSendAddDetails';
import TabNavigator from '../TabNavigations';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="QuickSendEnterAmount" component={QuickSendEnterAmount} />
        <Stack.Screen name="QuickSendAddDetails" component={QuickSendAddDetails} />
      </Stack.Navigator>
  );
};
export default StackNavigator;