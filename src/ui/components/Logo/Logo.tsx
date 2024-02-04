import React from 'react'
import { Image, Text, View } from 'react-native'
import { logoStyle } from './LogoStyle'

export const Logo = () => {
    return (

        <View style={logoStyle.container}>
            <Image
                source={require('../../assets/logo/logoSinFondo.png')} // Asegúrate de cambiar la ruta
                style={logoStyle.logo}
                resizeMode="contain" // Ajusta cómo se debe redimensionar la imagen
            />
        </View>

    )
}
