import React, {useEffect, useRef, useState} from 'react';
import {ShadowView} from '../../molecules/ServiceGeneralCard/styled';
import {GeneralContainer, GeneralText} from '../../atoms';
import {Row, Column} from './styled';
import {BackFinishBtns} from '../../molecules';
import {StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import MapView, {Marker} from 'react-native-maps';

export const ServiceClosure = ({servicio, action, uid}) => {
  const getInfo = userId => {
    firestore()
      .collection('Services')
      .doc(userId)
      .get()
      .then(documentSnapshot => {
        setData(documentSnapshot.data());
      });
  };
  const [data, setData] = useState();
  useEffect(() => {
    getInfo(uid);
  }, []);
  
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ShadowView>
      {data && (
        <GeneralContainer height={'490px'} width={'90%'} marginBottom={'5%'}>
          <Row>
            <GeneralText
              weight
              title={servicio}
              size={'h3'}
              color={'secondary'}
            />
          </Row>
          <Column>
            <GeneralText
              title="El reclutador te espera en su domicilio"
              size="h4"
            />
            <MapView
              provider="google"
              style={styles.mapView}
              initialRegion={{
                latitude: data.location.latitude,
                longitude: data.location.longitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.05,
              }}>
              <Marker
                title={data.address}
                coordinate={{
                  latitude: data.location.latitude,
                  longitude: data.location.longitude,
                }}
              />
            </MapView>
          </Column>
          <BackFinishBtns action={action} />
        </GeneralContainer>
      )}
    </ShadowView>
  );
};

const styles = StyleSheet.create({
  mapView: {
    width: '100%',
    height: '80%',
    marginBottom: 15,
  },
});
