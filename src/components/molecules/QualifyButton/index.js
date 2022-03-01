import React, {useState} from 'react';
import {CenteredView, ModalView} from './styled';
import {CommentAndQualify, OneStarButton} from '..';
import {GeneralModal} from '../../atoms/GeneralModal';

export const QualifyButton = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <CenteredView>
      <OneStarButton setModalVisible={setModalVisible} />
      <GeneralModal
        animation="fade"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        <CenteredView>
          <ModalView>
            <CommentAndQualify
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              navigation={navigation}
            />
          </ModalView>
        </CenteredView>
      </GeneralModal>
    </CenteredView>
  );
};
