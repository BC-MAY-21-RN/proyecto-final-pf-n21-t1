import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {Container, ContainerScreen, LinkStyle} from './styled';
import {GeneralLink, GeneralModal, GeneralText} from '../../atoms';
import HomeIcon from '../../../assets/icons/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '../../../theme/default';

const LinkIcon = ({icon, title}) => {
  return (
    <LinkStyle>
      <Icon name={icon} size={22} color={Color.secondary} />
      <GeneralLink title={'  ' + title} size="h5" color="secondary" />
    </LinkStyle>
  );
};

const RecruiterModal = () => {
  return (
    <View>
      <LinkStyle>
        <HomeIcon width={22} colorIcon="secondary" />
        <GeneralText title="  Inicio" size="h4" color="secondary" />
      </LinkStyle>
      <LinkIcon title="Contratar servicios" icon="hammer" />
      <LinkIcon title="Servicios contratados" icon="cog" />
      <LinkIcon title="Editar dirección" icon="create" />
      <LinkIcon title="Cerrar sesión" icon="log-out" />
    </View>
  );
};

const ProviderModal = () => {
  return (
    <View>
      <LinkIcon title="Solicitudes de servicios" icon="hammer" />
      <LinkIcon title="Opiniones de clientes" icon="star" />
      <LinkIcon title="Chats" icon="chatbubble" />
      <LinkIcon title="Editar perfil" icon="person" />
      <LinkIcon title="Cerrar sesión" icon="log-out" />
    </View>
  );
};

export const MenuModal = ({
  navigation,
  modalVisible,
  setModalVisible,
  userType,
}) => {
  var userModal = null;

  const ModalType = type => {
    if (type === 'Provider') {
      userModal = <ProviderModal />;
    } else if (type === 'Recruiter') {
      userModal = <RecruiterModal />;
    }
  };
  ModalType(userType);
  return (
    <GeneralModal
      animation="fade"
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}>
      <ContainerScreen
        activeOpacity={1}
        onPressOut={() => setModalVisible(false)}>
        <Container>
          <TouchableWithoutFeedback>{userModal}</TouchableWithoutFeedback>
        </Container>
      </ContainerScreen>
    </GeneralModal>
  );
};
