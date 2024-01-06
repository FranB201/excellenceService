import React, { ReactNode } from 'react'
import { StyleSheet, ImageBackground, Dimensions, View, Text, TextInput, SafeAreaView } from 'react-native';
import { backgroundStyle } from './BackgroundStyle';

const { width, height } = Dimensions.get('window');
export { width, height };

interface BackgroundProps {
    children: ReactNode;
  }
  
export const Background = ({children}: BackgroundProps) => {
    return (
        <ImageBackground
            source={require('../../assets/login/loginBackg.jpg')}
            style={backgroundStyle.backgroundImage}
        >
            <View style={backgroundStyle.overlay} />
            {children}
 

        </ImageBackground>
    )
}



