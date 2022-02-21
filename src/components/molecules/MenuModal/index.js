import React, {useState} from 'react';
import {Text} from 'react-native-elements';
import {
  Modal,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {} from './styled';

export const MenuModal = ({navigation, modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <TouchableOpacity
        style={style.containerScreen}
        activeOpacity={1}
        onPressOut={() => setModalVisible(false)}>
        <View style={style.container}>
          <TouchableWithoutFeedback>
            <Text>Hey</Text>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const style = StyleSheet.create({
  containerScreen: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  container: {
    backgroundColor: 'white',
    width: 170,
    height: 100,
    marginTop: '18.1%',
    position: 'absolute',
    right: 0,
    marginRight: '4%',
    boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.2)',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    elevation: 5,
  },
});
