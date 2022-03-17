import React, {useState, useEffect} from 'react';
import {GeneralHeader, OpinionComponent} from '../../components/molecules';
import {Container, ContainerWhite} from '../../components/atoms';
import {SafeAreaView, FlatList, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const CustomerOpinions = ({route, navigation}) => {
  const [opinions, setOpinions] = useState([]);
  const uid = route.params.uid ? route.params.uid : auth().currentUser.uid;

  const getArrayOpinions = setOpinions => {
    firestore()
      .collection('Opinions')
      .where('providerUid', '==', uid)
      .get()
      .then(async response => {
        setOpinions(response.docs);
      });
  };
  useEffect(() => {
    getArrayOpinions(setOpinions);
    //loadRTData()
  }, []);

  const OpinionRender = item => {
    return (
      <View>
        <OpinionComponent
          key={item.item._data.uid}
          calification={item.item._data.rating}
          customer={item.item._data.client}
          opinion={item.item._data.message}
        />
      </View>
    );
  };

  return (
    <ContainerWhite>
      <SafeAreaView />
      <Container>
        <GeneralHeader
          isTabRendered
          title="Opinion de clientes"
          color="background"
          weight
          size="h1"
          isMenuVisible
          userType="Provider"
          navigation={navigation}
        />
        <FlatList data={opinions} renderItem={OpinionRender} />
      </Container>
    </ContainerWhite>
  );
};
