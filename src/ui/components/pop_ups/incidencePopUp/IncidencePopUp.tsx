import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './IncidencePopUpStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IncidencePopUpProps {
    isVisible: boolean;
    onClose: () => void;
    onTakePhoto: () => void;
}


export const IncidencePopUp: React.FC<IncidencePopUpProps> = ({ isVisible, onClose, onTakePhoto }) => {
    const [motivo, setMotivo] = useState('');

    const handleSend = () => {
        console.log("Motivo Enviado:", motivo);
        onClose();
    };

    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.modalTitle}>Incidencia</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Ionicons name="close" size={30} color="black" />
            </TouchableOpacity>
          </View>
                <Text>Motivo:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setMotivo}
                    value={motivo}
                    placeholder="Escribe el motivo"
                    multiline={true}
                    numberOfLines={4}
                />
                <TouchableOpacity style={styles.button} onPress={onTakePhoto}>
                    <Text style={styles.buttonText}>+ Agregar Foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSend}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};