import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { FoodMenuScreen } from '../screens/food_menu/FoodMenuScreen';
import { CustomHeader } from '../components/custom_header/CustomHeader';
import { DrinksMenuScreen } from '../screens/drink_menu/DrinksMenuScreen';
import { ChecklistScreen } from '../screens/checklist/ChecklistScreen';
import { LessonsScreen } from '../screens/lessons/LessonsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MyTabs = () => (
  <Tab.Navigator initialRouteName="Home" >
    <Tab.Screen 
      name="Formación" 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="school" size={size} color="#525F7F" />
        ),
        header: () => <CustomHeader />,
        headerShown: true
      }} 
      component={LessonsScreen} 
    />
    
    <Tab.Screen 
      name="Checklist"
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="checkbox" size={size} color="#525F7F" />
        ),
        header: () => <CustomHeader />,
        headerShown: true
      }}
      component={ChecklistScreen}
    />
    
    <Tab.Screen 
      name="Home" 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color="#525F7F" />
        ),
        header: () => <CustomHeader />,
        headerShown: true
      }}
      component={HomeScreen}
    />
    
    <Tab.Screen 
      name="Food" 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="restaurant" size={size} color="#525F7F" />
        ),
        header: () => <CustomHeader />,
        headerShown: true
      }} 
      component={FoodMenuScreen} 
    />

    <Tab.Screen 
      name="Drinks" 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="beer" size={size} color="#525F7F" />
        ),
        header: () => <CustomHeader />,
        headerShown: true
      }}
      component={DrinksMenuScreen}
    />
  </Tab.Navigator>
);

export default MyTabs;