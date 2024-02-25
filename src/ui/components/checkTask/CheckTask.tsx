import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './CheckTaskStyle';
import { IncidencePopUp } from '../pop_ups/incidencePopUp/IncidencePopUp';
import { CustomText } from '../atoms/customText/CustomText';


interface CheckTaskProps {
    description: string;
}

export const CheckTask: React.FC<CheckTaskProps> = ({ description }) => {
    const [status, setStatus] = useState({ blue: false, green: false, red: false });
    const [isPopupVisible, setPopupVisible] = useState(false);
/*     const cameraRef = useRef<RNCamera>(null);
 */

    const handleCheck = (color: 'blue' | 'green' | 'red') => {
        setStatus({ ...status, [color]: true });
        if (color === 'red') {
            setPopupVisible(true);
        }
    };

    const handleTakePhoto = async () => {
/*         if (cameraRef.current) {
            try {
                const options = { quality: 0.5, base64: true };
                const data = await cameraRef.current.takePictureAsync(options);
                console.log(data.uri);
                // Aquí puedes manejar la foto como necesites
            } catch (error) {
                console.error(error);
                Alert.alert('Error', 'No se pudo tomar la foto.');
            }
        } */
    };

    return (
        <View style={styles.container}>
            <CustomText style={styles.description}>{description}</CustomText>
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
            <IncidencePopUp
                isVisible={isPopupVisible}
                onClose={() => setPopupVisible(false)}
                onTakePhoto={handleTakePhoto}
            />
{/*             {isPopupVisible && (
                <RNCamera
                    ref={cameraRef}
                // Otros parámetros de configuración para RNCamera
                />
            )} */}
        </View>
    );
};