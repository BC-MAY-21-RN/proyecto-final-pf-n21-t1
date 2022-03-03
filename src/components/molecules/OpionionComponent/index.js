import React from 'react';
import {GeneralContainer, GeneralText, StarRating} from '../../atoms';
import {StarsPosition, OpinionText, CustomerName} from './styled';
import {ShadowView} from '../ServiceGeneralCard/styled';

export const OpinionComponent = ({opinion, customer, calification}) => {
  return (
    <ShadowView>
      <GeneralContainer height={'160px'} width={'90%'} marginBottom={'5%'}>
        <CustomerName>
          <GeneralText
            title={customer}
            color={'secondary'}
            size={'h5'}
            weight
          />
        </CustomerName>
        <OpinionText>
          <GeneralText
            italic
            title={opinion}
            color={'text'}
            size={'h5'}
          />
        </OpinionText>
        <StarsPosition>
          <StarRating
            quantity={5}
            startValue={calification}
            readBoolean={true}
            backgroundColor={'hover'}
          />
        </StarsPosition>
      </GeneralContainer>
    </ShadowView>
  );
};
