import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyTabs from './TabNavigator';
import { CustomHeader } from '../components/custom_header/CustomHeader';

const Drawer = createDrawerNavigator();

const MyDrawer = () => (
        <Drawer.Navigator
        screenOptions={{
            drawerStyle: {
            backgroundColor: '#c6cbef',
            },
            headerShown: false
        }}
        >
      <Drawer.Screen name="hello" component={MyTabs}   
      options={{
            // Opciones específicas para esta pantalla
            drawerActiveTintColor: 'black',
            drawerItemStyle: { marginVertical: 5 },
        }}/>
      {/* Más pantallas aquí si es necesario */}
    </Drawer.Navigator>
  );
  

export default MyDrawer;
