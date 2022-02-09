import React from 'react';
import {View} from 'react-native';
import {
  GeneralInput,
  GeneralText,
  GeneralPicker,
  GeneralButton,
} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';

export const DateSelection = () => {
  return (
    <View>
      <GeneralHeader
        title="Contratar"
        isTabRendered={true}
        size="h1"
        color="background"
        weight
      />
        <GeneralText
          title="Seleccione fecha y horario"
          size="h1"
          color="secondary"
          weight
        />
        <GeneralButton title="Siguiente" color="secondary" />
    </View>
  );
};
