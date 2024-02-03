import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { CustomHeader } from '../components/custom_header/CustomHeader';
import { DrinksMenuScreen } from '../screens/drink_menu/DrinksMenuScreen';
import { ChecklistScreen } from '../screens/checklist/ChecklistScreen';
import { LessonsScreen } from '../screens/lessons/LessonsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FoodStack from './FoodStack';

const Tab = createBottomTabNavigator();

const MyTabs = () => (
  <Tab.Navigator initialRouteName="Home" >
    <Tab.Screen 
      name="Formación" 
      options={{
        tabBarIcon: () => (
          <Ionicons name="school" color="#525F7F" />
        ),
        header: () => <CustomHeader />,
        headerShown: true
      }} 
      component={LessonsScreen} 
    />
    
    <Tab.Screen 
      name="Checklist"
      options={{
        tabBarIcon: () => (
          <Ionicons name="checkbox" color="#525F7F" />
        ),
        header: () => <CustomHeader />,
        headerShown: true
      }}
      component={ChecklistScreen}
    />
    
    <Tab.Screen 
      name="Home" 
      options={{
        tabBarIcon: () => (
          <Ionicons name="home"  color="#525F7F" />
        ),
        header: () => <CustomHeader />,
        headerShown: true
      }}
      component={HomeScreen}
    />
    
    <Tab.Screen 
      name="Food" 
      options={{
        tabBarIcon: () => (
          <Ionicons name="restaurant" color="#525F7F" />
        ),
        header: () => <CustomHeader />,
        headerShown: true
      }} 
      component={FoodStack} 
    />

    <Tab.Screen 
      name="Drinks" 
      options={{
        tabBarIcon: () => (
          <Ionicons name="beer" color="#525F7F" />
        ),
        header: () => <CustomHeader />,
        headerShown: true
      }}
      component={DrinksMenuScreen}
    />
  </Tab.Navigator>
);

export default MyTabs;