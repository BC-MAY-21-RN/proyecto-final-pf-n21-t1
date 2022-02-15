import React, {useState, useEffect} from 'react';
import {
  CommentAndQualify,
  GeneralHeader,
  ServiceGeneralCard,
} from '../../components/molecules';
import {Container} from '../../components/atoms';
import {ScrollView} from 'react-native';

export const ServicesHistory = () => {
  /*   const [showQualify, setShowQualify] = useState(false); */

  return (
    <Container>
      <GeneralHeader
        isTabRendered
        title="Servicios Solicitados "
        color="background"
        weight
        size="h1"
        isMenuVisible
      />
      {/* 
      {showQualify && <CommentAndQualify />} */}
      <ScrollView>
        {/* AQUI DEBE IR CON MAPPING/FLATLIST CON LAS LECTURAS A FIREBASE Y QUE SE GENEREN LOS UPCOMINGSERVICECOMPONENTS NECESARIOS */}

        <ServiceGeneralCard
          servicio={'Fontanero'}
          status={'Servicio Finalizado'} // esto lo recibe como prop y utiliza la cadena "SERVICIO FINALIZADO" para decidir si muestra o no el boton de estrella para calificar.
          /*   setShowQualify={setShowQualify} */
        />
        <ServiceGeneralCard
          servicio={'Carpintero'}
          status={'Servicio Aceptado'} // esto lo recibe como prop y utiliza la cadena "SERVICIO FINALIZADO" para decidir si muestra o no el boton de estrella para calificar.
        />
        <ServiceGeneralCard
          servicio={'Pintor'}
          status={'Servicio Rechazado'} // esto lo recibe como prop y utiliza la cadena "SERVICIO FINALIZADO" para decidir si muestra o no el boton de estrella para calificar.
        />
      </ScrollView>
    </Container>
  );
};
