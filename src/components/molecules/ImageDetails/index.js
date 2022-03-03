import React from 'react';
import {GeneralText, ImageButton} from '../../atoms';
import {CenterImage} from './styled';

export const ImageDetails = ({image, setImage}) => {
  return (
    <CenterImage>
      <GeneralText
        title="Ingresa tus datos"
        size="h1"
        color="secondary"
        weight="bold"
      />
      <GeneralText
        title="Sube una foto tuya"
        size="h2"
        color="primary"
        weight="bold"
      />
      <ImageButton image={image} setImage={setImage} />
    </CenterImage>
  );
};
