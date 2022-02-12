import { View, Text, Touchable } from 'react-native';
import React from 'react';
import { GeneralText, StarRating } from '../../atoms';
import { StarPosition, TextCenter } from './styled';

export const QualifyButton = () => {
  return (
    <StarPosition onPress={()=>console.log("Hola")/* abrir el pop up de del componente para escribir la opinion */}  >
      <TextCenter>
        <StarRating
          quantity={1}
          startValue={1}
          readBoolean={true}
          backgroundColor={'hover'}
        />
      </TextCenter>
      <GeneralText color= 'secondary'weight title={'Calificar'} size={'h7'} />
    </StarPosition>
  );
};