import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrdersScreen from '../screens/orders/OrdersScreen';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const TabOrder = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator initialRouteName="HomeOrder">
        <Tab.Screen
          name="Order"
          options={{
            tabBarIcon: () => <Ionicons name="cart" color="#525F7F"  size={20}/>,
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Ponte al día')}>
                <Ionicons name="arrow-back" size={25} color="#525F7F" />
              </TouchableOpacity>
            ),
          }}
          component={OrdersScreen}
        />
        <Tab.Screen
          name="Stock"
          options={{
            tabBarIcon: () => <Ionicons name="albums" color="#525F7F"  size={20}/>,
            headerShown: true,
          }}
          component={OrdersScreen}
        />
      </Tab.Navigator>
      );
}

  


export default TabOrder;
