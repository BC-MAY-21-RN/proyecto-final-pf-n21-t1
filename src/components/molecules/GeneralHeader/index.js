import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header, Logo, HeaderContainer} from './styled';
import {appLogo} from '../../../assets/images';
import {TabRender} from '../../atoms';
import {TouchableOpacity} from 'react-native';
import {Color} from '../../../theme/default';

const MenuButton = () => {
  return (
    <TouchableOpacity>
      <Icon name={'menu'} size={40} color={Color.primary} />
    </TouchableOpacity>
  );
};

export const GeneralHeader = props => {
  return (
    <HeaderContainer>
      <Header>
        <Logo source={appLogo} />
        {props.isMenuVisible ? <MenuButton /> : undefined}
      </Header>
      <TabRender
        isTabRendered={props.isTabRendered}
        title={props.title}
        color={props.color}
        weight={props.weight}
        size={props.size}
      />
    </HeaderContainer>
  );
};
