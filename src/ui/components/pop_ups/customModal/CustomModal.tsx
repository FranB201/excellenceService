/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './CustomModalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CustomModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  isVisible,
  onClose,
  children,
}) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContainer}>
          <View style={styles.colorBar} />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={30} color="black" />
          </TouchableOpacity>
          <View style={styles.modalContent}>
            {children}
          </View>
        </View>


    </Modal>
  );
};
