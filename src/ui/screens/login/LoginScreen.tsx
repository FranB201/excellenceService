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
    const { signIn, errorMessage, removeError, status } = useContext(AuthContext);

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    });

    useEffect(() => {
        if (!errorMessage) return;

        Alert.alert('Login incorrecto', errorMessage, [{
            text: 'Ok',
            onPress: removeError
        }]);
    }, [errorMessage, removeError]);

    useEffect(() => {
        if (status === 'authenticated') {
            // Redirigir a la pantalla principal
            navigation.navigate('Main');
        }
    }, [status, navigation]);


    const onLogin = () => {
        Keyboard.dismiss();
        if (!email || !password) {
            Alert.alert('Faltan datos', 'Por favor, complete todos los campos');
            return;
        }
        signIn({ email, password });

    };


    const isValidEmail = (email: string) => {
        // Expresión regular para validar el formato de un email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    return (

        <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: '#b5d4cc' }}>

            <View style={loginStyle.container}>
                <Logo />

                <View style={loginStyle.loginInputsContainer}>
                    <Text style={loginStyle.quote}>
                        La excelencia en el servicio es el ingrediente secreto que sazona la experiencia
                    </Text>
                    {/* Campo de Email */}
                    <View style={loginStyle.inputContainer}>
                        <Ionicons name="mail" size={20} color="rgba(0, 0, 0, 0.7)" style={loginStyle.icon} />
                        <TextInput
                            placeholder="Email"
                            keyboardType="email-address"
                            style={loginStyle.inputField}
                            placeholderTextColor="rgba(0, 0, 0, 0.7)"
                            onChangeText={(value) => onChange(value, 'email')}
                            value={email}
                        />
                    </View>

                    {/* Campo de Contraseña */}
                    <View style={loginStyle.inputContainer}>
                        <Ionicons name="lock-closed" size={20} color="rgba(0, 0, 0, 0.7)" style={loginStyle.icon} />
                        <TextInput
                            placeholder="Contraseña"
                            secureTextEntry
                            style={loginStyle.inputField}
                            placeholderTextColor="rgba(0, 0, 0, 0.7)"
                            onChangeText={(value) => onChange(value, 'password')}
                            value={password}
                        />
                    </View>
                    <View style={loginStyle.forgotPassword}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={loginStyle.buttonForget}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                </View>

                    {/* Botón de Login */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={loginStyle.button}
                        onPress={onLogin}
                    >
                        <Text style={loginStyle.buttonText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};
