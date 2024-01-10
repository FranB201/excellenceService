import React from 'react'
import { Text, Vibration, View } from 'react-native'
import { HomeStyle } from './HomeStyle'
import { InputAvatar } from '../../components/inputs/InputAvatar';



export const HomeScreen = () => {
    return (

        <View style={HomeStyle.container}>
                <InputAvatar />
        </View>

    )
}
