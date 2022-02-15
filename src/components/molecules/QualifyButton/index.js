import React, {useState} from 'react';
import {GeneralText, StarRating} from '../../atoms';
import {CenteredView, ModalView, StarPosition, TextCenter} from './styled';
import {CommentAndQualify} from '..';
import {Alert, Modal} from 'react-native';

export const QualifyButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <CenteredView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <CenteredView>
          <ModalView>
            <CommentAndQualify
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </ModalView>
        </CenteredView>
      </Modal>
      <StarPosition onPress={() => setModalVisible(true)}>
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
    </CenteredView>
  );
};
