import React from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {} from './styled';
import {GeneralLink, GeneralModal, GeneralText} from '../../atoms';
import HomeIcon from '../../../assets/icons/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '../../../theme/default';

const LinkIcon = ({icon, title}) => {
  return (
    <View style={style.inicio}>
      <Icon name={icon} size={22} color={Color.secondary} />
      <GeneralLink title={'  ' + title} size="h5" color="secondary" />
    </View>
  );
};

export const MenuModal = ({navigation, modalVisible, setModalVisible}) => {
  return (
    <GeneralModal
      animation="fade"
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}>
      <TouchableOpacity
        style={style.containerScreen}
        activeOpacity={1}
        onPressOut={() => setModalVisible(false)}>
        <View style={style.container}>
          <TouchableWithoutFeedback>
            <View>
              <TouchableOpacity style={style.inicio}>
                <HomeIcon width={22} colorIcon="secondary" />
                <GeneralText title="  Inicio" size="h4" color="secondary" />
              </TouchableOpacity>
              <LinkIcon title="Contratar servicios" icon="hammer" />
              <LinkIcon title="Servicios contratados" icon="cog" />
              <LinkIcon title="Editar dirección" icon="create" />
              <LinkIcon title="Cerrar sesión" icon="log-out" />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </GeneralModal>
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
    width: 200,
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
