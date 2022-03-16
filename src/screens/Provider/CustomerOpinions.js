import React, {useState, useEffect} from 'react';
import {GeneralHeader, OpinionComponent} from '../../components/molecules';
import {Container, ContainerWhite} from '../../components/atoms';
import {SafeAreaView, FlatList, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const CustomerOpinions = ({navigation}) => {
  const [opinions, setOpinions] = useState([]);

  const getArrayOpinions = setOpinions => {
    firestore()
      .collection('Opinions')
      .get()
      .then(async response => {
        setOpinions(response._docs);
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
        <FlatList
          data={opinions}
          renderItem={OpinionRender}
          keyExtractor={item => item._data}
        />
      </Container>
    </ContainerWhite>
  );
};
