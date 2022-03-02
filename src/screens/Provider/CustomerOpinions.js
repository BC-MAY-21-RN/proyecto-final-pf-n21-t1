import React from 'react';
import {GeneralHeader, OpinionComponent} from '../../components/molecules';
import {Container, ContainerWhite} from '../../components/atoms';
import {SafeAreaView} from 'react-native';
export const CustomerOpinions = ({navigation}) => {
  return (
    <ContainerWhite>
      <SafeAreaView />
      <Container>
        <GeneralHeader
          isTabRendered
          title="Opinion de clientes"
          color="background"
          weight
          size="h1"
          isMenuVisible
          userType="Provider"
          navigation={navigation}
        />
        <OpinionComponent
          calification={'1'}
          customer={'Fernanda'}
          opinion={
            'Llegó tarde y al final me cobró mucho mas de lo que habiamos acordado, no lo recomiendo'
          }
        />
        <OpinionComponent calification={'5'} customer={'Mariela'} />
        {/* nombre de customer y opinion se recibiran de firebase en una flat list y se envian como props al componente */}
      </Container>
    </ContainerWhite>
  );
};
