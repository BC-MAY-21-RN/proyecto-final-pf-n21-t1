import React, {useState} from 'react';
import {GeneralText, StarRating} from '../../atoms';
import {CenteredView, ModalView, StarPosition, TextCenter} from './styled';
import {CommentAndQualify, OneStarButton} from '..';
import {Alert, Modal} from 'react-native';
import {TouchableOpacity} from 'react-native';

export const QualifyButton = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <CenteredView>
      <OneStarButton setModalVisible={setModalVisible} />
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
              navigation={navigation}
            />
          </ModalView>
        </CenteredView>
      </Modal>
    </CenteredView>
  );
};
