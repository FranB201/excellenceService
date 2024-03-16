import React from 'react';
import { View, Text, Image } from 'react-native';
import { MessageCardStyle } from './MessageCardStyle'; // Asegúrate de importar tus estilos
import { InputAvatar } from '../../inputs/InputAvatar';
import { CustomText } from '../../atoms/customText/CustomText';


function getAvatarUri(avatarName: string) {
    switch (avatarName) {
        case 'avatar1': return require('../../../assets/avatarUser/avatar1.png');
        case 'avatar2': return require('../../../assets/avatarUser/avatar2.png');
        case 'avatar3': return require('../../../assets/avatarUser/avatar3.png');

        default: return require('../../../assets/avatarUser/avatar4.png');
    }
}




export const MessageCard = ({
    name = 'Nombre Usuario',
    date = '4 ene',
    messageText = 'Aquí va el mensaje del usuario...',
    avatarUri = 'avatar3'
}) => {
    return (
        <View style={MessageCardStyle.container}>
            <View style={MessageCardStyle.header}>
                <Image
                    source={getAvatarUri(avatarUri)}
                    style={MessageCardStyle.avatar}
                />
                <View style={MessageCardStyle.headerText}>
                    <CustomText style={MessageCardStyle.name}>{

                        name}</CustomText>
                    <CustomText style={MessageCardStyle.date}>{date}</CustomText>
                </View>
            </View>
            <CustomText style={MessageCardStyle.messageText}>{messageText}</CustomText>
            <InputAvatar 
                placeh='Añade un comentario'/>
        </View>
    );
};
