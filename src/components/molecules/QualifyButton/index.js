import React from 'react';
import {GeneralText, StarRating} from '../../atoms';
import {StarPosition, TextCenter} from './styled';
import {CommentAndQualify} from '..';

function commentBubble() {
  return <CommentAndQualify />; //AQUI SE SUMMONE EL COMPONENTE PERO NO APARECE
}
export const QualifyButton = () => {
  return (
    <StarPosition
      /* abrir el pop up de del componente para escribir la opinion */
      onPress={
        (() => commentBubble(),
        console.log('Deberia aparecer el CommentAndQualify'))
      }>
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
