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
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const uploadOpinion = (opinion, navigation) => {
  firestore()
    .collection('Opinions')
    .add(opinion)
    .then(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Path'}],
      });
    });
};

export const CommentAndQualify = ({
  setModalVisible,
  modalVisible,
  navigation,
  uid,
  providerUid,
  client,
}) => {
  const [opinion, setOpinion] = useState('');
  const [stars, setStars] = useState();
  const handleText = text => {
    console.log(text);
    setOpinion(text);
  };
  const handleRating = rating => {
    setStars(rating);
  };
  const data = {
    clientUid: auth().currentUser.uid,
    message: opinion,
    rating: stars,
    serviceUid: uid,
    providerUid: providerUid,
    client: client,
  };
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
            startValue={stars}
            readBoolean={false}
            backgroundColor={'hover'}
            handleRating={handleRating}
          />
        </StarRatingPosition>
        <OpinionInput>
          <GeneralInput
            placeholder={'Dános tu opinón para este proveedor'}
            height={70}
            whiteBackground
            onChangeText={handleText}
          />
        </OpinionInput>
        <SendButton>
          <GeneralButton
            width={100}
            title={'Enviar'}
            height={35}
            color={'primary'}
            action={() => uploadOpinion(data, navigation)}
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
