import React from 'react';
import {Rating} from 'react-native-elements';

export const StarRating = ({
  quantity, //cantidad de estrellas totales, por defecto 5
  readBoolean, //booleano para indicar si es solo lectura o no, por defecto false
  startValue, //cantidad de estrellas seleccionadas/llenas
  backgroundColor, //color de fondo del contenedor de las estrellas, por defecto blanco
}) => {
  const ratingCompleted = rating => {
    console.log('Rating is ' + rating);
  };
  const aligning = 'flex-start';
  return (
    <Rating
      ratingCount={quantity}
      readonly={readBoolean}
      onFinishRating={ratingCompleted}
      startingValue={startValue}
      imageSize={30}
      style={{alignSelf: aligning}}
      tintColor={backgroundColor}
    />
  );
};
