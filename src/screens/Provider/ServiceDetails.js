import React from 'react';
import {SafeAreaView} from 'react-native';
import {Container, ContainerWhite} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import {ServiceClosure} from '../../components/organisms';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

export const ServiceDetails = ({route}) => {
  const uid = route.params.uid;
  const navigation = useNavigation();
  const handleAction = userId => {
    firestore()
      .collection('Services')
      .doc(userId)
      .update({status: 'Done'})
      .then(() => {
        navigation.goBack();
      });
  };

  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          isTabRendered
          title="Detalles de Servicio"
          color="background"
          weight
          size="h1"
          isMenuVisible
          userType="Provider"
        />
        <ServiceClosure
          servicio={'Fontanero'}
          action={() => handleAction(uid)}
          fin
          uid={uid}
        />
      </Container>
    </ContainerWhite>
  );
};
