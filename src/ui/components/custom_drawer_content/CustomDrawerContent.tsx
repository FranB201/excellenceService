import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Navigator } from '../../navigation/Navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  // Cambio aquí: Usar DrawerContentProps
} from '@react-navigation/drawer';
import { styles } from './CustomDrawerContentStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';



export const CustomDrawerContent: React.FC<any> = props => {
  return (
    <View style={{ flex: 1 }}>

      <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/avatarUser/avatar1.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>Fran Bolufer</Text>
          <Text style={styles.info}>Rango: Camarero</Text>
          <View style={styles.excellenceContainer}>
            <Text style={styles.excellenceText}>Excelencia:</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={20} style={styles.starIcon} />
              <Ionicons name="star" size={20} style={styles.starIcon} />
              <Ionicons name="star" size={20} style={styles.starIcon} />
              <Ionicons name="star" size={20} style={styles.starIcon} />
              <Ionicons name="star-half" size={20} style={styles.starIcon} />
            </View>
          </View>
        </View>

        <DrawerItem
          label="Pedidos"
          onPress={() => props.navigation.navigate('Orders')}
          style={styles.drawerItem}
        />

        <DrawerItem
          label="Horarios"
          onPress={() => props.navigation.navigate('Schedules')}
          style={styles.drawerItem}
        />
        <DrawerItem
          label="Vacaciones"
          onPress={() => props.navigation.navigate('Schedules')}
          style={styles.drawerItem}
        />
        <DrawerItem
          label="Sugerencias"
          onPress={() => props.navigation.navigate('Schedules')}
          style={styles.drawerItem}
        />
      </DrawerContentScrollView>


      <TouchableOpacity
        onPress={() => {
          // Realiza la acción de logout
        }}
        style={[styles.logoutButton]}
      >
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>


      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo/logoNegroSinFondo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>

  );
};
