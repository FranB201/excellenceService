import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FoodMenuScreen } from '../screens/Restaurant/food_menu/FoodMenuScreen';
import { MenuTypeScreen } from '../screens/Restaurant/menu_type/MenuType';
import { RootStackParamList } from './Navigator';

const Stack = createStackNavigator<RootStackParamList>();

const FoodStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: false
      }}
      name="MenuType"
      component={MenuTypeScreen}
    />
    <Stack.Screen name="Platos" component={FoodMenuScreen} />
  </Stack.Navigator>
);

export default FoodStack;
