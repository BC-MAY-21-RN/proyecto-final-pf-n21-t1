import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Container, ContainerWhite} from '../../components/atoms';
import {CardOrganism} from '../../components/organisms';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const ProviderPreview = ({navigation}) => {
  const id = auth().currentUser.uid;
  const userRT = userId => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const subscriber = firestore()
        .collection('Users')
        .doc(userId)
        .onSnapshot(documentSnapshot => {
          console.log('User data: ', documentSnapshot.data());
        });
      return () => subscriber();
    }, [userId]);
  };
  userRT(id);
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <CardOrganism navigation={navigation} userType="Provider" />
      </Container>
    </ContainerWhite>
  );
};
