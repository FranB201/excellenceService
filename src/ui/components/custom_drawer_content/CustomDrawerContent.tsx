import React from 'react';
import {View, Image, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

interface DrawerContentComponentProps {
    title: string;
  }
export const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {

  return (
    <DrawerContentScrollView {...props}>
      <View style={{padding: 20, backgroundColor: '#fff'}}>
        <Image
          source={{uri: 'url_de_tu_imagen'}}
          style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
        />
        <Text style={{fontWeight: 'bold'}}>Catherine Marin</Text>
        <Text>Rango: Camarera</Text>
        <Text>Excelencia: ★★★★☆</Text>
      </View>

      {/* Agrega el resto de tus items de drawer aquí */}

     {/*  <DrawerItemList {...props} /> */}

      {/* Puedes agregar items personalizados o componentes aquí */}
      <DrawerItem
        label="Logout"
        onPress={() => {
          // Realiza la acción de logout
        }}
      />
    </DrawerContentScrollView>
  );
}
