import React, {useEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import {
  Container,
  ContainerWhite,
  GeneralContainer,
} from '../../components/atoms';
import {GeneralHeader, ProviderCard} from '../../components/molecules';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const ServiceProviders = ({route, navigation}) => {
  const [data, setData] = useState();
  const {title} = route.params;

  useEffect(() => {
    firestore()
      .collection('Users')
      .where('servicePicker', '==', title)
      .where('__name__', '!=', auth().currentUser.uid)
      .get()
      .then(result => {
        const docs = result.docs;
        const dataArray = docs.map(r => {
          const uid = r.id;
          return {...r.data(), uid};
        });
        setData(dataArray);
      });
  }, []);

  const renderItem = ({item}) => {
    const style = {marginBottom: 10};
    return (
      <TouchableOpacity activeOpacity={1} style={style} key={item.uid}>
        <GeneralContainer width="360px" height="180px" direction>
          <ProviderCard
            width="360px"
            height="180px"
            backgroundColor={'hover'}
            name={item.name}
            number={item.inputNumber}
            navigation={navigation}
            data={item.uid}
          />
        </GeneralContainer>
      </TouchableOpacity>
    );
  };

  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          isTabRendered
          isMenuVisible
          title={title}
          size="h1"
          color="background"
          weight
          userType="Recruiter"
          navigation={navigation}
        />
        {data && <FlatList data={data} renderItem={renderItem} />}
      </Container>
    </ContainerWhite>
  );
};
