import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, PermissionsAndroid} from 'react-native';
import {
  Container,
  ContainerWhite,
  GeneralButton,
  GeneralText,
} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const requestPermission = async setPermission => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) setPermission(true);
    else {
      Alert.alert('Error', 'Debes de darle permisos de ubicación.', [
        {text: 'Ok', onPress: () => requestPermission(setPermission)},
      ]);
    }
  } catch (err) {
    console.log(err);
  }
};

const ScreenInfo = () => {
  const [isPermission, setPermission] = useState(false);
  const [location, setLocation] = useState();
  const [markerLocation, setMarkerLocation] = useState(undefined);

  useEffect(() => {
    if (!isPermission) requestPermission(setPermission);
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
        setMarkerLocation({latitude, longitude});
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, [isPermission]);

  return (
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
      {location !== undefined && markerLocation !== undefined ? (
        <MapView
          style={{width: '100%', height: '60%'}}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChangeComplete={({latitude, longitude}) => setMarkerLocation({latitude, longitude})}>
          <Marker
            title="Prueba"
            coordinate={{
              latitude: markerLocation.latitude,
              longitude: markerLocation.longitude,
            }}
          />
        </MapView>
      ) : undefined}
      <GeneralButton title={'Asignar dirección'} />
    </View>
  );
};

export const MapDirection = () => {
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
        <ScreenInfo />
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
