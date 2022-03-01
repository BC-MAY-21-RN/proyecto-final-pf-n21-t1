import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Container, ContainerWhite} from '../../components/atoms';
import {CardOrganism} from '../../components/organisms';

export const ProviderPreview = ({navigation}) => {
  const [data, setData] = useState('');
  const id = auth().currentUser.uid;
  const userRT = userId => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const subscriber = firestore()
        .collection('Users')
        .doc(userId)
        .onSnapshot(documentSnapshot => {
          const user = documentSnapshot.data();
          setData(user);
        });
      return () => subscriber();
    }, [userId]);
  };
  userRT(id);
  console.log(data);
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <CardOrganism navigation={navigation} userType="Provider" data={data} />
      </Container>
    </ContainerWhite>
  );
};
