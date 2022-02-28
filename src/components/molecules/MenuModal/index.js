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

const MenuTemplate = ({navigation, logout, type}) => {
  const myData = type === 'Provider' ? 'ProviderPreview' : 'ServiceGrid';
  const serviceNav = type === 'Provider' ? 'UpcomingServices' : 'ServiceGrid';
  return (
    <View>
      <ItemMenu navigation={navigation} type={type} />
      <LinkIcon
        title={
          type === 'Provider'
            ? 'Solicitudes de servicios'
            : 'Contratar servicios'
        }
        icon="hammer"
        action={() => navigation.navigate(serviceNav)}
      />
      <LinkIcon
        title="Chats"
        icon="chatbubble"
        action={() => navigation.navigate(myData)}
      />
      <LinkIcon
        title="Mis datos"
        icon="person"
        action={() => navigation.navigate(myData)}
      />
      <LinkIcon
        title="Cerrar sesión"
        icon="log-out"
        action={() => logout() && navigation.navigate('Login')}
      />
    </View>
  );
};

const ItemMenu = ({navigation, type}) => {
  var itemData = {title: '', icon: 'star', action: ''};
  if (type === 'Provider') {
    itemData.title = 'Opiniones de clientes';
    itemData.action = 'CustomerOpinions';
  } else if (type === 'Recruiter') {
    itemData.title = 'Servicios contratados';
    itemData.action = 'ServicesHistory';
  }
  return (
    <LinkIcon
      title={itemData.title}
      icon={itemData.icon}
      action={() => navigation.navigate(itemData.action)}
    />
  );
};

export const MenuModal = ({
  navigation,
  modalVisible,
  setModalVisible,
  userType,
}) => {
  const {logout} = useContext(AuthContext);

  var userModal = (
    <>
      <MenuTemplate
        navigation={navigation}
        logout={() => logout()}
        type={userType}
      />
    </>
  );

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
