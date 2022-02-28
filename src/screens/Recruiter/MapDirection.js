import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, PermissionsAndroid} from 'react-native';
import {
  Container,
  ContainerWhite,
  GeneralButton,
  GeneralText,
  GeneralInput,
} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

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
  const [address, setAddress] = useState();

  useEffect(() => {
    if (!isPermission) requestPermission(setPermission);
    Geocoder.init('AIzaSyDRXA8fQv0Y_C1bv35dVdE2H5yBG5xYA6s');
  }, []);

  useEffect(() => {
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

  const handleChangeRegionComplete = ({latitude, longitude}) => {
    Geocoder.from({
      latitude,
      longitude,
    }).then(res => setAddress(res.results[0].formatted_address));
    Geocoder.from(address)
      .then(json => {
        var location = json.results[0].geometry.location;
        console.log(location);
      })
      .catch(error => console.warn(error));
  };

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
      <GeneralInput
        placeholder="Direccion"
        leftIcon="location-outline"
        value={address}
      />
      {location !== undefined && markerLocation !== undefined ? (
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
          }}
          onRegionChangeComplete={handleChangeRegionComplete}
          onRegionChange={({latitude, longitude}) =>
            setMarkerLocation({latitude, longitude})
          }>
          <Marker
            title={address}
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
  },
  mapTexts: {
    alignItems: 'center',
  },
  mapView: {
    width: '100%',
    height: '60%',
  },
});
