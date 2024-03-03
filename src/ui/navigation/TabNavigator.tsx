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
      name="Horarios"
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="calendar" size={size} color="#8491A3" />
        ),
        header: () => <CustomHeader />,
        headerShown: true
      }}
      component={DrinksMenuScreen}
    />
    <Tab.Screen
      name="Checklist"
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="checkbox" size={size} color="#8491A3" />
        ),
        header: () => <CustomHeader />,
        headerShown: true
      }}
      component={ChecklistScreen}
    />
    <Tab.Screen
      name="Ponte al día"
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color="#8491A3" />
        ),
        header: () => <CustomHeader />,
        headerShown: true
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name="Carta"
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="restaurant" size={size} color="#8491A3" />
        ),
        header: () => <CustomHeader />,
        headerShown: true
      }}
      component={FoodStack}
    />
    <Tab.Screen
      name="Formación"
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="school" size={size} color="#8491A3" />
        ),
        header: () => <CustomHeader />,
        headerShown: true
      }}
      component={LessonsScreen}
    />
  </Tab.Navigator>
);

export default MyTabs;