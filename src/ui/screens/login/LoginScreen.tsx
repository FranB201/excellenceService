import React, { useContext, useEffect, useState } from 'react'
import { Alert, Keyboard, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background } from '../../components/background/Background'
import { Logo } from '../../components/Logo/Logo'
import { loginStyle } from './LoginStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useForm } from '../../hooks/useForm'
import { AuthContext } from '../../../context/AuthContext'


export const LoginScreen = () => {

    const navigation = useNavigation();
    const [forgotEmail, setForgotEmail] = useState('');
    const { signIn, errorMessage, removeError } = useContext(AuthContext);

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    });

    useEffect(() => {
        if (errorMessage && errorMessage.length === 0) {
            return;
        }

        Alert.alert('Login incorrecto', errorMessage, [{
            text: 'Ok',
            onPress: removeError
        }]);

    }, [errorMessage])


    const onLogin = () => {
        Keyboard.dismiss();
        if (!email || !password) {
            Alert.alert('Faltan datos', 'Por favor, complete todos los campos');
            return;
        }
        console.log('entro en login')
        signIn({ email, password });

    };


    const isValidEmail = (email: string) => {
        // Expresión regular para validar el formato de un email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    return (


        <KeyboardAwareScrollView style={{ flex: 1 }}>

            <Background>
                <Logo />
                <Text style={loginStyle.quote}>La excelencia en el servicio es el ingrendiente secreto que sazona la experiencia</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="mail" size={20} color="#172B4D" style={{ margin: 10 }} />
                    <TextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        style={[loginStyle.inputField, Platform.OS === 'ios' && loginStyle.inputFieldIOS,
                        { color: 'black' }]}
                        placeholderTextColor='black'
                        selectionColor="white"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value) => {
                            onChange(value, 'email');
                            setForgotEmail(value);
                        }}

                        value={email}
                        onSubmitEditing={onLogin}
                    ></TextInput>
                </View>

                <View style={loginStyle.inputContainer}>
                    <Ionicons name="lock-closed" size={20} color="#172B4D" style={{ margin: 10 }} />
                    <TextInput
                        placeholder="contraseña"
                        keyboardType="email-address"
                        style={[loginStyle.inputField, Platform.OS === 'ios' && loginStyle.inputFieldIOS,
                        { color: 'black' }]}
                        placeholderTextColor='black'
                        selectionColor="white"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'password')}
                        value={password}
                        onSubmitEditing={onLogin}
                        secureTextEntry
                    ></TextInput>

                </View>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={loginStyle.button}
                    onPress={onLogin}>
                    <Text style={loginStyle.buttonText}>Log in</Text>
                </TouchableOpacity>
            </Background>

        </KeyboardAwareScrollView>
    );

}



