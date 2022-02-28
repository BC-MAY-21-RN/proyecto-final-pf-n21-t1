import React, {useState} from 'react';
import {Avatar} from 'react-native-elements';
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


export const EditProvider = ({navigation}) => {
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
              triggerValidation(text, 'string', setNotesError);
            }}
            errorMessage={notesError}
            value={form.notes}
          />
          <GeneralButton
            title="Siguiente"
            color="secondary"
            action={() => navigation.navigate('EditDates')}
          />
          <SafeAreaView />
        </ScrollView>
      </Container>
    </ContainerWhite>
  );
};
