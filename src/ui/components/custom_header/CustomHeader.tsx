import { View, Image, Text, TouchableOpacity } from "react-native";
import React = require("react");
import { styles } from './CustomHeaderStyle';
import { useNavigation, DrawerActions } from "@react-navigation/core";
import LinearGradient from 'react-native-linear-gradient';
export const CustomHeader = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.headerContainer}>

      {/* Resto de tu encabezado personalizado */}
      <LinearGradient style={styles.headerContainer}
        colors={['#B5D4CC',    // Color inicial
          '#bcd9d0',    // Más cercano a B5D4CC
          '#c4ddd4',    // Un poco más claro que el anterior
          '#cbe2d8',    // Aún más claro
          '#d2e7dc',    // Más claro
          '#daece1',    // Cerca del tono medio entre B5D4CC y F7FFF6
          '#F8F8FF']}
        start={{ x: 0, y: 0 }} // Comienzo del gradiente en la parte superior
        end={{ x: 0, y: 1 }} // Final del gradiente en la parte inferior
      >

        <TouchableOpacity onPress={openDrawer}>
          {/* Aquí puedes usar una imagen o un icono para el botón del menú */}
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nombre Restaurante</Text>
      </LinearGradient>
    </View>
  );
};