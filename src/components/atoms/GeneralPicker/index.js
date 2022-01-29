import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';

export const GeneralPicker = ({data}) => {
  const [value, setValue] = useState();
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    const dataPicker = data.map(item => {
      return (
        <Picker.Item key={item.value} label={item.label} value={item.value} />
      );
    });
    setValue(dataPicker);
  }, [data]);

  return (
    <Picker
      selectedValue={selected}
      onValueChange={({itemValue}) => setSelected(itemValue)}>
      {value}
    </Picker>
  );
};
