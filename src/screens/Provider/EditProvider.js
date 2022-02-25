import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Avatar} from 'react-native-elements';
import {
  Container,
  ContainerWhite,
  GeneralButton,
  GeneralInput,
} from '../../components/atoms';
import {GeneralHeader, ServicePicker} from '../../components/molecules';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import triggerValidation from '../../utils/authentication/inputValidations';

export const EditProvider = () => {
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
  const [service, setService] = useState('');
  const data = [
    {
      value: 'Fontanería',
      label: 'Fontanería',
    },
    {
      value: 'Construcción',
      label: 'Construcción',
    },
    {
      value: 'Técnico',
      label: 'Técnico',
    },
    {
      value: 'Electricista',
      label: 'Electricista',
    },
    {
      value: 'Carpintero',
      label: 'Carpintero',
    },
    {
      value: 'Pintor',
      label: 'Pintor',
    },
  ];

  return (
    <ContainerWhite>
      <Container>
        <GeneralHeader
          title="Edita tu perfil"
          isMenuVisible
          isTabRendered
          size="h1"
          color="background"
          weight
          userType="Provider"
        />
        <ScrollView
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Avatar
            activeOpacity={0.2}
            avatarStyle={{}}
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{backgroundColor: '#BDBDBD'}}
            iconStyle={{}}
            imageProps={{}}
            onLongPress={() => console.log('onLongPress')}
            onPress={() => console.log('onPress')}
            overlayContainerStyle={{}}
            placeholderStyle={{}}
            rounded
            size="xlarge"
            source={{
              uri: 'https://www.larutadelagarnacha.mx/wp-content/uploads/2021/06/tripita5.jpeg',
            }}
            title="Penepene">
            <Avatar.Accessory size={32} onPress={() => console.log('hey')} />
          </Avatar>
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
            title="Contraseña"
            placeholder="Contraseña"
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
              triggerValidation(text, 'string', setNotesError);
            }}
            errorMessage={notesError}
            value={form.notes}
          />
          <GeneralButton
            title="Siguiente"
            color="secondary"
            action={console.log('hola')}
          />
          <SafeAreaView />
        </ScrollView>
      </Container>
    </ContainerWhite>
  );
};
