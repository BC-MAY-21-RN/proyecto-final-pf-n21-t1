/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import {Container, ContainerWhite, GeneralButton} from '../../components/atoms';
import {GeneralHeader, EditData} from '../../components/molecules';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import userRT from '../../utils/userRT';
import auth from '@react-native-firebase/auth';

export const EditProvider = ({navigation}) => {
  const [data, setData] = useState({});
  const [file, setFile] = useState();
  const id = auth().currentUser.uid;
  const [form, setForm] = useState({
    name: '',
    password: '',
    phone: '',
    notes: '',
  });
  const [image, setImage] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
  );

  const [isOk, setOk] = useState(true);

  useEffect(() => {
    userRT(id, setData);
  }, []);
  useEffect(() => {
    data.name &&
      setForm({
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.inputNumber,
        notes: data.notes,
      });
    setImage(data.image);
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          title="Edita tu perfil"
          isMenuVisible
          isTabRendered
          size="h1"
          color="background"
          weight
          userType="Provider"
          navigation={navigation}
        />
        <ScrollView
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {data && (
            <EditData
              formHook={{form, setForm, setOk}}
              imageHook={{image, setImage, setFile}}
              edition
            />
          )}
          <GeneralButton
            title="Siguiente"
            color="secondary"
            action={() =>
              navigation.navigate('EditDates', {
                Image: file,
                Name: form.name,
                Password: form.password,
                Phone: form.phone,
                Notes: form.notes,
                Data: data,
              })
            }
            disabled={!isOk}
          />
          <SafeAreaView />
        </ScrollView>
      </Container>
    </ContainerWhite>
  );
};
