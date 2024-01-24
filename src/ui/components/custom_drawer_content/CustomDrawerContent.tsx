import React from 'react';
import {View, Image, Text} from 'react-native';
import { Navigator } from '../../navigation/Navigator';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, 
  // Cambio aquí: Usar DrawerContentProps
} from '@react-navigation/drawer';


export const CustomDrawerContent: React.FC<any> = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{padding: 20, backgroundColor: '#fff'}}>
        <Image
          source={require('../../assets/login/avatar.png')}
          style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
        />
        <Text style={{fontWeight: 'bold'}}>Catherine Marin</Text>
        <Text>Rango: Camarera</Text>
        <Text>Excelencia: ★★★★☆</Text>
      </View>

      <DrawerItem
        label="Pedidos"
        onPress={() => props.navigation.navigate('Orders')}// Navega a la pantalla de pedidos
      />

      <DrawerItem
        label="Horarios"
        onPress={() => props.navigation.navigate('Schedules')} // Navega a la pantalla de horarios
      />

      <DrawerItem
        label="Logout"
        onPress={() => {
          // Realiza la acción de logout
        }}
      />
    </DrawerContentScrollView>
  );
};
