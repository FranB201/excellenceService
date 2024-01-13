import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './CheckTaskStyle';


interface CheckTaskProps {
    description: string;
}

// Componente CheckTask
export const CheckTask: React.FC<CheckTaskProps> = ({ description }) => {
    const [status, setStatus] = useState({ blue: false, green: false, red: false });

    const handleCheck = (color: 'blue' | 'green' | 'red') => {
        setStatus({ ...status, [color]: true });
        // Puedes añadir más lógica aquí si es necesario
    };

    return (
        <View style={styles.container}>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.checksContainer}>
                <TouchableOpacity onPress={() => handleCheck('blue')}>
                    <Ionicons name="checkmark-circle" size={30} color={status.blue ? 'blue' : 'grey'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleCheck('green')}>
                    <Ionicons name="checkmark-circle" size={30} color={status.green ? 'green' : 'grey'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleCheck('red')}>
                    <Ionicons name="close-circle" size={30} color={status.red ? 'red' : 'grey'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};