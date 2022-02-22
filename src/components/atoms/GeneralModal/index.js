import React from 'react';
import {Modal} from 'react-native';

export const GeneralModal = ({
  children,
  animation,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Modal
      animationType={animation}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      {children}
    </Modal>
  );
};
