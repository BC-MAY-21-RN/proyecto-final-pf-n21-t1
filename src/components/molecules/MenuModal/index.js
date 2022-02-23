import React, {useContext} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {Container, ContainerScreen, LinkStyle} from './styled';
import {GeneralLink, GeneralModal} from '../../atoms';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '../../../theme/default';
import {AuthContext} from '../../../navigation/AuthProvider';

const LinkIcon = ({icon, title, action}) => {
  return (
    <LinkStyle>
      <Icon name={icon} size={22} color={Color.secondary} />
      <GeneralLink
        title={'  ' + title}
        size="h5"
        color="secondary"
        action={action}
      />
    </LinkStyle>
  );
};

const RecruiterModal = ({navigation, logout}) => {
  return (
    <View>
      <LinkIcon
        title="Contratar servicios"
        icon="hammer"
        action={() => navigation.navigate('ServiceGrid')}
      />
      <LinkIcon
        title="Servicios contratados"
        icon="cog"
        action={() => navigation.navigate('ServicesHistory')}
      />
      <LinkIcon
        title="Chats"
        icon="chatbubble"
        action={() => navigation.navigate('ServiceGrid')}
      />
      <LinkIcon
        title="Mis datos"
        icon="create"
        action={() => navigation.navigate('ServiceGrid')}
      />
      <LinkIcon
        title="Cerrar sesión"
        icon="log-out"
        action={() => logout() && navigation.navigate('Login')}
      />
    </View>
  );
};

const ProviderModal = ({navigation, logout}) => {
  return (
    <View>
      <LinkIcon
        title="Solicitudes de servicios"
        icon="hammer"
        action={() => navigation.navigate('UpcomingServices')}
      />
      <LinkIcon
        title="Opiniones de clientes"
        icon="star"
        action={() => navigation.navigate('CustomerOpinions')}
      />
      <LinkIcon
        title="Chats"
        icon="chatbubble"
        action={() => navigation.navigate('ProviderPreview')}
      />
      <LinkIcon
        title="Ver perfil"
        icon="person"
        action={() => navigation.navigate('ProviderPreview')}
      />
      <LinkIcon
        title="Cerrar sesión"
        icon="log-out"
        action={() => logout() && navigation.navigate('Login')}
      />
    </View>
  );
};

export const MenuModal = ({
  navigation,
  modalVisible,
  setModalVisible,
  userType,
}) => {
  const {logout} = useContext(AuthContext);
  var userModal = null;

  const ModalType = type => {
    if (type === 'Provider') {
      userModal = (
        <ProviderModal navigation={navigation} logout={() => logout()} />
      );
    } else if (type === 'Recruiter') {
      userModal = (
        <RecruiterModal navigation={navigation} logout={() => logout()} />
      );
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
