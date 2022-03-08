import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Container, ContainerWhite} from '../../components/atoms/index.js';
import {CardOrganism} from '../../components/organisms/index.js';
import userRT from '../../utils/userRT';

export const ProviderCardData = ({navigation, route}) => {
  const [data, setData] = useState(undefined);
  const {uid} = route.params;
  useEffect(() => userRT(uid, setData), []);

  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        {data && (
          <CardOrganism
            navigation={navigation}
            buttonType={'ProviderCardData'}
            userType="Recruiter"
            data={data}
          />
        )}
      </Container>
    </ContainerWhite>
  );
};
