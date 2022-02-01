import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { GeneralButton, GeneralInput, GeneralLink, GeneralText } from '../components/atoms';
import { GeneralHeader } from '../components/molecules/index'

export const Register = (props) => {
  return (
  <>
    <GeneralHeader/>
      <View style={styles.registro}>
        <GeneralText 
          size={"h1"}
          color={"secondary"}
          title={"Regístrate"}
          weight
        />
      </View>
      <View style={styles.center}>
        <GeneralInput
          title={"Nombre Completo"}
          placeholder={"Tu nombre"}
        />
        <GeneralInput
          title={"Correo"}
          placeholder={"Tu correo"}
        />
        <GeneralInput
          title={"Contraseña"}
          placeholder={"Tu contraseña"}
          secret
        />
        <GeneralButton
          title={"Registrarse"}
          color={"primary"}
          size={340}
        />
        <Text>O si gustas</Text>
        <GeneralButton
          title={"Registrate con Facebook"}
          color={"facebook"}
          size={340}
        />
        <GeneralLink
          title={"¿Ya eres usuario? Inicia sesión"}
          size={"h4"}
          color={"secondary"}
          action={() => props.navigation.navigate('Login')}
        />
      </View>
  </>
  )
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registro: {
    marginLeft: 10,
  },
});