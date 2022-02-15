import React, {useState} from 'react';
import {GeneralText, StarRating} from '../../atoms';
import {CenteredView, ModalView, StarPosition, TextCenter} from './styled';
import {CommentAndQualify} from '..';
import {Alert, Modal} from 'react-native';
import {TouchableOpacity} from 'react-native';

export const QualifyButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <CenteredView>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <StarRating
          quantity={1}
          startValue={1}
          readBoolean={true}
          backgroundColor={'hover'}
        />
      </TouchableOpacity>
      <GeneralText color="secondary" weight title={'Calificar'} size={'h7'} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
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
    </CenteredView>
  );
};
