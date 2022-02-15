import React, {useState} from 'react';
import {GeneralText, StarRating} from '../../atoms';
import {StarPosition, TextCenter} from './styled';
import {CommentAndQualify} from '..';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

export const QualifyButton = (/* {setShowQualify} */) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CommentAndQualify
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />

            {/*  <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cerradooo</Text>
            </Pressable> */}
          </View>
        </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    paddingTop: '5%',
    backgroundColor: 'white',
    borderRadius: 20,
    width: 370,
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 7,
    padding: 10,
    elevation: 2,
    width: 100,
    height: 35,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#26cbdf',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

/*  <StarPosition onPress>
   <TextCenter>
     <StarRating
       quantity={1}
       startValue={1}
       readBoolean={true}
       backgroundColor={'hover'}
     />
   </TextCenter>
   <GeneralText color="secondary" weight title={'Calificar'} size={'h7'} />
 </StarPosition> */
