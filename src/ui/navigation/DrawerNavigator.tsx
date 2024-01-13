import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyTabs from './TabNavigator';
import {CustomDrawerContent} from '../components/custom_drawer_content/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const MyDrawer = () => (
        <Drawer.Navigator
        screenOptions={{
            drawerStyle: {
            },
            headerShown: false
            
        }}
        drawerContent={(props: { title: any; }) => {
            // Asumiendo que el título se encuentra directamente en props
            const { title } = props;
            return <CustomDrawerContent title={title} />;
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
