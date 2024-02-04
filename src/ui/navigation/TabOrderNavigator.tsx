import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrdersScreen from '../screens/orders/OrdersScreen';

const Tab = createBottomTabNavigator();

const TabOrder = () => (
  <Tab.Navigator initialRouteName="HomeOrder">
    <Tab.Screen
      name="Order"
      options={{
        tabBarIcon: () => <Ionicons name="school" color="#525F7F"  size={20}/>,
        headerShown: true,
      }}
      component={OrdersScreen}
    />
    <Tab.Screen
      name="Stock"
      options={{
        tabBarIcon: () => <Ionicons name="school" color="#525F7F"  size={20}/>,
        headerShown: true,
      }}
      component={OrdersScreen}
    />
  </Tab.Navigator>
);

export default TabOrder;
