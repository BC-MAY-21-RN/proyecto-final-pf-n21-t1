import React from 'react'
import { ShadowView } from '../../molecules/ServiceGeneralCard/styled';
import { GeneralButton, GeneralContainer, GeneralText } from '../../atoms';
import { GroupRow, GroupColumn } from './styled';
import { useNavigation } from '@react-navigation/native';

export const DetailsOrganism = ({servicio}) => {
  const navigation = useNavigation();
  return (
    <ShadowView>
      <GeneralContainer height={'470px'} width={'90%'} >
        <GroupRow>
          <GeneralText 
            weight
            title={servicio}
            size={'h3'}
            color={'secondary'}
          />
        </GroupRow>
        <GroupColumn>
          <GeneralText 
            title={"Informacion"}
            size={'h5'}
            color={'text'}
          />
        </GroupColumn>
        <GroupRow>
          <GeneralButton 
            width={'90%'}
            height={'35%'}
            title={'Volver'}
            color={'secondary'}
            action={() => navigation.navigate('UpcomingServices')}
          />
        </GroupRow>
      </GeneralContainer>
    </ShadowView>
  );
};
