/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import {
  Container,
  ContainerWhite,
  GeneralButton,
  GeneralInput,
  ImageButton,
} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import triggerValidation from '../../utils/authentication/inputValidations';
import userRT from '../../utils/userRT';
import auth from '@react-native-firebase/auth';

export const EditProvider = ({navigation}) => {
  const [data, setData] = useState('');
  const id = auth().currentUser.uid;
  userRT(id, setData);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    notes: '',
  });
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [notesError, setNotesError] = useState();
  const [image, setImage] = useState(
    'https://www.larutadelagarnacha.mx/wp-content/uploads/2021/06/tripita5.jpeg',
  );

  useEffect(() => {
    console.log(data.image);
    setForm({
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.inputNumber,
      notes: data.notes,
    });
    setImage(data.image);
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
          {data ? (
            <>
              <ImageButton image={image} setImage={setImage} />
              <GeneralInput
                title="Nombre"
                placeholder="Nombre"
                onChangeText={text => {
                  setForm({...form, name: text});
                  triggerValidation(text, 'name', setNameError);
                }}
                errorMessage={nameError}
                value={form.name}
              />
              <GeneralInput
                title="Email"
                placeholder="Email"
                onChangeText={text => {
                  setForm({...form, email: text});
                  triggerValidation(text, 'email', setEmailError);
                }}
                errorMessage={emailError}
                value={form.email}
              />
              <GeneralInput
                title="Password"
                placeholder="Password"
                secret
                onChangeText={text => {
                  setForm({...form, password: text});
                  triggerValidation(text, 'string', setPasswordError);
                }}
                errorMessage={passwordError}
                value={form.password}
              />
              <GeneralInput
                title="Teléfono"
                placeholder="Teléfono"
                onChangeText={text => {
                  setForm({...form, phone: text});
                  triggerValidation(text, 'phone', setPhoneError);
                }}
                errorMessage={phoneError}
                value={form.phone}
              />
              <GeneralInput
                title="Notas"
                placeholder="Notas"
                onChangeText={text => {
                  setForm({...form, notes: text});
                  triggerValidation(text, 'name', setNotesError);
                }}
                errorMessage={notesError}
                value={form.notes}
              />
            </>
          ) : undefined}
          <GeneralButton
            title="Siguiente"
            color="secondary"
            action={() =>
              navigation.navigate('EditDates', {
                Image: image,
                Name: form.name,
                Email: form.email,
                Password: form.password,
                Phone: form.phone,
                Notes: form.notes,
                Data: data,
              })
            }
            />
          <SafeAreaView />
        </ScrollView>
      </Container>
    </ContainerWhite>
  );
};
