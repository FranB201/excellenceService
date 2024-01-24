import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyTabs from './TabNavigator';
import {CustomDrawerContent} from '../components/custom_drawer_content/CustomDrawerContent';
import { OrdersScreen } from '../screens/orders/OrdersScreen';
import { SchedulesScreen } from '../screens/schedules/SchedulesScreen';

const Drawer = createDrawerNavigator();

const MyDrawer = () => (
        <Drawer.Navigator
        screenOptions={{
            drawerStyle: {
            },
            headerShown: false
            
        }}
        drawerContent={(props: any) => <CustomDrawerContent {...props} />}
        >
      
      <Drawer.Screen name="hello" component={MyTabs}   
      options={{
            // Opciones específicas para esta pantalla
            drawerActiveTintColor: 'black',
            drawerItemStyle: { marginVertical: 5 },
        }}/>
        <Drawer.Screen name="Orders" component={OrdersScreen} />
        <Drawer.Screen name="Schedules" component={SchedulesScreen} />
      {/* Más pantallas aquí si es necesario */}
    </Drawer.Navigator>
    
  );
  

export default MyDrawer;
