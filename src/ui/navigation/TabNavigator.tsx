import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/home/HomeScreen';
import {FoodMenuScreen} from '../screens/food_menu/FoodMenuScreen';
import { CustomHeader } from '../components/custom_header/CustomHeader';

const Tab = createBottomTabNavigator();

const MyTabs = () => (
  <Tab.Navigator >
    <Tab.Screen name="Home"  component={HomeScreen} />
    <Tab.Screen name="Settings" options={{ 
          header: () => <CustomHeader />, 
          headerShown: true
        }} component={FoodMenuScreen} />
  </Tab.Navigator>
);

export default MyTabs;