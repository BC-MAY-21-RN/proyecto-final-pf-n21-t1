import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Container, ContainerWhite} from '../../components/atoms';
import {CardOrganism} from '../../components/organisms';
import auth from '@react-native-firebase/auth';
import userRT from '../../utils/userRT';

export const ProviderPreview = ({navigation}) => {
  const [data, setData] = useState(undefined);
  const id = auth().currentUser.uid;
  userRT(id, setData);
  console.log(data);
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        {data ? (
          <CardOrganism
            navigation={navigation}
            userType="Provider"
            data={data}
          />
        ) : undefined}
      </Container>
    </ContainerWhite>
  );
};
