import React from 'react';
import {GeneralText, StarRating} from '../../atoms';
import {StarPosition, TextCenter} from './styled';
import {CommentAndQualify} from '..';

export const QualifyButton = ({setShowQualify}) => {
  return (
    <StarPosition onPress={() => setShowQualify(true) }>
      <TextCenter>
        <StarRating
          quantity={1}
          startValue={1}
          readBoolean={true}
          backgroundColor={'hover'}
        />
      </TextCenter>
      <GeneralText color="secondary" weight title={'Calificar'} size={'h7'} />
    </StarPosition>
  );
};
