import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header, Logo, HeaderContainer, Menu} from './styled';
import {appLogo} from '../../../assets/images';
import {TabRender} from '../../atoms';
import {Color} from '../../../theme/default';
import {MenuModal} from '..';

const MenuButton = ({setModalVisible}) => {
  return (
    <Menu onPress={() => setModalVisible(true)}>
      <Icon name={'menu'} size={40} color={Color.primary} />
    </Menu>
  );
};

export const GeneralHeader = props => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <HeaderContainer>
      <Header>
        <Logo source={appLogo} />
        {props.isMenuVisible ? (
          <MenuButton setModalVisible={setModalVisible} />
        ) : undefined}
      </Header>
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
      />
    </HeaderContainer>
  );
};
