import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Container,
  ContainerWhite,
  GeneralButton,
  GeneralText,
} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';

export const MapDirection = navigation => {
  return (
    <ContainerWhite>
      <Container>
        <GeneralHeader
          isTabRendered
          isMenuVisible
          title="Geo Localización"
          color="background"
          weight
          size="h1"
          userType="Recruiter"
        />
        <View style={styles.mapScreen}>
          <View style={styles.mapTexts}>
            <GeneralText
              title="¿Cuál es tu dirección?"
              weight="bold"
              size="h1"
              color="secondary"
            />

            <GeneralText
              title="Indica en el mapa la ubicación del inmueble para que el proveedor del servicio pueda acudir."
              size="h6"
              justify={'center'}
            />
          </View>
          {/*  COLOCAR AQUI EL COMPONENTE DEL MAP */}
          <GeneralButton title={'Asignar dirección'} />
        </View>
      </Container>
    </ContainerWhite>
  );
};

const styles = StyleSheet.create({
  mapScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mapTexts: {
    alignItems: 'center',
  },
});
