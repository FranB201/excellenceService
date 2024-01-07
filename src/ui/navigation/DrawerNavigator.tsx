import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyTabs from './TabNavigator';

const Drawer = createDrawerNavigator();

const MyDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Tabs" component={MyTabs} />
    {/* Más pantallas aquí si es necesario */}
  </Drawer.Navigator>
);

export default MyDrawer;
