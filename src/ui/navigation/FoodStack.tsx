import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FoodMenuScreen } from '../screens/Restaurant/food_menu/FoodMenuScreen';
import { MenuTypeScreen } from '../screens/Restaurant/menu_type/MenuType';

const Stack = createStackNavigator();

const FoodStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="MenuType" component={MenuTypeScreen} />
    <Stack.Screen name="FoodMenu" component={FoodMenuScreen} />
  </Stack.Navigator>
);

export default FoodStack;
