import React from 'react';
import {Text} from 'react-native-elements';
import {
  Modal,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {} from './styled';
import {GeneralLink, GeneralText} from '../../atoms';
import HomeIcon from '../../../assets/icons/Home';

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
            <View>
              <TouchableOpacity style={style.inicio}>
                <HomeIcon />
                <GeneralText title="  Inicio" size="h4" color="primary" />
              </TouchableOpacity>
              <GeneralLink
                title={'Contratar Sevicios'}
                size="h5"
                color="secondary"
              />
              <GeneralLink
                title={'Servicios Contratados'}
                size="h5"
                color="secondary"
              />
              <GeneralLink
                title={'Cerrar sesión'}
                size="h5"
                color="secondary"
              />
              <GeneralLink
                title={'Editar dirección'}
                size="h5"
                color="secondary"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const style = StyleSheet.create({
  inicio: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'flex-start',
  },
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
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});
