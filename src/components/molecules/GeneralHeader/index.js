import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Header,
  Logo,
  HeaderContainer,
  Menu,
  Row,
  BackButton,
  LogoContainer,
} from './styled';
import {appLogo} from '../../../assets/images';
import {TabRender} from '../../atoms';
import {Color} from '../../../theme/default';
import {MenuModal} from '..';
import {useNavigation} from '@react-navigation/native';

const MenuButton = ({setModalVisible}) => {
  return (
    <Menu onPress={() => setModalVisible(true)}>
      <Icon name={'menu'} size={40} color={Color.primary} />
    </Menu>
  );
};

const GoBackButton = props => {
  return (
    <BackButton onPress={() => props.navigation.goBack()}>
      <Icon name="chevron-back" size={30} color={Color.secondary} />
    </BackButton>
  );
};

const RowHeader = props => {
  return (
    <Row>
      {props.navigation.canGoBack() ? (
        <GoBackButton navigation={props.navigation} />
      ) : undefined}
      <Header>
        <LogoContainer>
          <Logo source={appLogo} />
        </LogoContainer>
        {props.isMenuVisible ? (
          <MenuButton setModalVisible={props.setModalVisible} />
        ) : undefined}
      </Header>
    </Row>
  );
};

export const GeneralHeader = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <HeaderContainer>
      <RowHeader
        navigation={navigation}
        isMenuVisible={props.isMenuVisible}
        setModalVisible={setModalVisible}
      />
      <TabRender
        isTabRendered={props.isTabRendered}
        title={props.title}
        color={props.color}
        weight={props.weight}
        size={props.size}
      />
      <MenuModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        userType={props.userType}
        navigation={navigation}
      />
    </HeaderContainer>
  );
};
