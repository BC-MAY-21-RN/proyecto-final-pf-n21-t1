import React, {useState} from 'react';
import {
  GeneralButton,
  GeneralContainer,
  GeneralInput,
  GeneralText,
  StarRating,
} from '../../atoms';
import {ShadowView} from '../ServiceGeneralCard/styled';
import {
  QualifyQuestion,
  OpinionInput,
  StarRatingPosition,
  SendButton,
} from './styled';
export const CommentAndQualify = ({
  setModalVisible,
  modalVisible,
  navigation,
}) => {
  return (
    <ShadowView>
      <GeneralContainer
        border
        borderColor
        height={'212px'}
        width={'100%'}
        marginBottom={'5%'}>
        <QualifyQuestion>
          <GeneralText
            title={'¿Cómo calificas mi servicio?'}
            color={'secondary'}
            size={'h4'}
            weight
          />
        </QualifyQuestion>
        <StarRatingPosition>
          <StarRating
            quantity={5}
            startValue={1}
            readBoolean={false}
            backgroundColor={'hover'}
          />
        </StarRatingPosition>
        <OpinionInput>
          <GeneralInput
            placeholder={'Dános tu opinón para este proveedor'}
            height={70}
            whiteBackground
          />
        </OpinionInput>
        <SendButton>
          <GeneralButton
            width={100}
            title={'Enviar'}
            height={35}
            color={'primary'}
            action={() => navigation.navigate('CustomerOpinions')}
          />

          <GeneralButton
            width={100}
            title={'Cerrar'}
            height={35}
            action={() => setModalVisible(!modalVisible)}
          />
        </SendButton>
      </GeneralContainer>
    </ShadowView>
  );
};
