import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/home/HomeScreen';
import {FoodMenuScreen} from '../screens/food_menu/FoodMenuScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={FoodMenuScreen} />
  </Tab.Navigator>
);

export default MyTabs;