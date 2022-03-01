import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {jose} from '../../assets/images';
import {
  Container,
  ContainerWhite,
  GeneralContainer,
} from '../../components/atoms';
import {GeneralHeader, ProviderCard} from '../../components/molecules';

export const ServiceProviders = ({navigation}) => {
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          isTabRendered
          isMenuVisible
          title="FONTANERÍA"
          size="h1"
          color="background"
          weight
          userType="Recruiter"
          navigation={navigation}
        />
        <TouchableOpacity activeOpacity={1}>
          <GeneralContainer width="360px" height="180px" direction>
            <ProviderCard
              width="360px"
              height="180px"
              backgroundColor={'hover'}
              name={'José Rodríguez'}
              number={'3123100157'}
              zone={'Colima y VdeA'}
              image={jose}
              navigation={navigation}
            />
          </GeneralContainer>
        </TouchableOpacity>
      </Container>
    </ContainerWhite>
  );
};
