import React, {useState, useEffect} from 'react';
import {Alert, PermissionsAndroid, SafeAreaView} from 'react-native';
import {Container, ContainerWhite, GeneralButton} from '../../components/atoms';
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

export const RecruiterCreation = ({navigation}) => {
  const [isLocationEnable, setLocationEnable] = useState(false);
  const [location, setLocation] = useState();

  requestPermission(setLocationEnable);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, [isLocationEnable]);

  return (
    <Container>
      <GeneralHeader
        title="Tarjeta de presentación"
        isMenuVisible
        isTabRendered
        size="h1"
        color="background"
        weight
        userType="Recruiter"
      />
      {location !== undefined ? (
        <MapView
          style={{flex: 2}}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            title="Prueba"
            coordinate={{latitude: 37.78825, longitude: -122.4324}}
          />
        </MapView>
      ) : undefined}
      <GeneralButton
        title="Empezar"
        color="secondary"
        action={() => navigation.navigate('ProviderPreview')}
      />
    </Container>
  );
};
