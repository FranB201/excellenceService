import { View, Image,Text, TouchableOpacity } from "react-native";
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
        <LinearGradient  style={styles.headerContainer}
            colors={['#cee9d6', '#cee9d6', '#cee9d6','#cee9d6','#cee9d6','#cee9d6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
        <TouchableOpacity onPress={openDrawer}>
          {/* Aquí puedes usar una imagen o un icono para el botón del menú */}
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>A la fresca</Text>
        </LinearGradient>
      </View>
    );
  };