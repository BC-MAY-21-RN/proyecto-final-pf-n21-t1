import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';

export const GeneralPicker = ({data, style, selected, setSelected}) => {
  const [value, setValue] = useState();
  
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
      style={style}
      selectedValue={selected}
      onValueChange={(itemValue) => setSelected(itemValue)}>
      {value}
    </Picker>
  );
};
