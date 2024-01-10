import React from 'react';
import { Image, TextInput, View, TouchableOpacity } from 'react-native';
import { InputAvatarStyle } from './InputAvatarStyle';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importa Ionicons


export const InputAvatar = () => {
  return (
    
    <View style={InputAvatarStyle.board}>
      <Image
        source={require('../../assets/login/loginBackg.jpg')}
        style={InputAvatarStyle.image}
      />
      <TextInput
        style={InputAvatarStyle.input}
        placeholder="Escribe algo..."
        multiline={true} // Permite múltiples líneas
        // Añade los manejadores de eventos que necesites
      />
  
    </View>
  );
};
