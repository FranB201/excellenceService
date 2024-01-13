import React from 'react';
import { Image, TextInput, View, TouchableOpacity } from 'react-native';
import { InputAvatarStyle } from './InputAvatarStyle';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importa Ionicons


export const InputAvatar = ({
  placeh = '',
}) => {
  return (

    <View style={InputAvatarStyle.board}>
      <Image
        source={require('../../assets/avatarUser/avatar1.png')}
        style={InputAvatarStyle.image}
      />
      <TextInput
        style={InputAvatarStyle.input}
        placeholder={placeh}
        multiline={true}
      />
      <TouchableOpacity
        onPress={() => console.log('Enviar mensaje')}
        style={{justifyContent: 'center', marginRight:10}}
      >
        <Ionicons
          name="send"
          size={25}
          color="#525F7F"
        />
      </TouchableOpacity>
    </View>
  );
};
