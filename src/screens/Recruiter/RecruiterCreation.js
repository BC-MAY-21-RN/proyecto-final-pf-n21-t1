import React from 'react';
import {View} from 'react-native'
import {
  Container,
  GeneralButton,
} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';



export const RecruiterCreation = ({navigation}) => {
  return (
    <Container>
    <GeneralHeader
        title="Tarjeta de presentación"
        isMenuVisible
        isTabRendered
        size="h1"
        color="background"
        weight
      />
      <GeneralButton title="Empezar" color="secondary" action={()=>navigation.navigate("ProviderPreview")}/>
    </Container>
  );
};
