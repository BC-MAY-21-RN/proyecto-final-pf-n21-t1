import React, {useState, useEffect, useRef} from 'react';
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
import Geocoder from 'react-native-geocoding';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Color} from '../../theme/default';

const apiKey = 'AIzaSyDRXA8fQv0Y_C1bv35dVdE2H5yBG5xYA6s';

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

const ScreenInfo = ({
  markerLocation,
  setMarkerLocation,
  mapView,
  address,
  setAddress,
  location,
  setLocation,
}) => {
  const [isPermission, setPermission] = useState(false);

  useEffect(() => {
    if (!isPermission) requestPermission(setPermission);
    Geocoder.init(apiKey);
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
      {location !== undefined && markerLocation !== undefined ? (
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
          }}
          ref={mapView}
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
      <GeneralButton
        title={'Asignar dirección'}
        action={() => console.log(address, location)}
      />
    </View>
  );
};

const headerProps = {
  isTabRendered: true,
  isMenuVisible: true,
  title: 'Geo Localización',
  color: 'background',
  weight: true,
  size: 'h1',
  userType: 'Recruiter',
};

const handleAnimate = (lat, lng, mapView) => {
  mapView.current.animateToRegion(
    {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
    1000,
  );
};

const placesProps = (handlePressAutoComplete, address, setAddress) => {
  return {
    query: {
      key: apiKey,
      language: 'es', // language of the results
    },
    fetchDetails: true,
    onPress: handlePressAutoComplete,
    styles: {textInput: styles.textInput},
    textInputProps: {
      value: address,
      onChangeText: text => setAddress(text),
    },
  };
};

export const MapDirection = () => {
  const [markerLocation, setMarkerLocation] = useState(undefined);
  const [address, setAddress] = useState();
  const [location, setLocation] = useState();
  const mapView = useRef(null);

  const handlePressAutoComplete = (_, details = null) => {
    const {lat, lng} = details.geometry.location;
    setMarkerLocation({latitude: lat, longitude: lng});
    setAddress(details.formatted_address);
    handleAnimate(lat, lng, mapView);
  };

  return (
    <ContainerWhite>
      <Container>
        <GeneralHeader {...headerProps} />
        <GooglePlacesAutocomplete
          {...placesProps(handlePressAutoComplete, address, setAddress)}
        />
        <ScreenInfo
          markerLocation={markerLocation}
          setMarkerLocation={setMarkerLocation}
          mapView={mapView}
          address={address}
          setAddress={setAddress}
          location={location}
          setLocation={setLocation}
        />
      </Container>
    </ContainerWhite>
  );
};

const styles = StyleSheet.create({
  mapScreen: {
    flex: 5,
    alignItems: 'center',
  },
  mapTexts: {
    alignItems: 'center',
  },
  mapView: {
    width: '100%',
    height: '60%',
  },
  textInput: {
    backgroundColor: Color.input,
    borderRadius: 5,
    fontSize: 15,
  },
});
