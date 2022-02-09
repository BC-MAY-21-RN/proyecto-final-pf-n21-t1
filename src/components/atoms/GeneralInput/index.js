import React, {useState, useEffect} from 'react';
import {Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
import {Color} from '../../../theme/default';
import Icon from 'react-native-vector-icons/Ionicons';

const eyeButton = (visible, setVisible) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setVisible(!visible);
      }}>
      <Icon
        name={visible ? 'eye-outline' : 'eye'}
        size={20}
        color={Color.text}
      />
    </TouchableOpacity>
  );
};

export const GeneralInput = ({title, placeholder, secret, leftIcon}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(secret); //secret es el prop enviado desde login para forzar que el input tenga o no visible el RightIcon
  }, [secret]);

  const inputContainerStyle = {
    height: 50,
    marginTop: 5,
    borderRadius: 8,
    borderBottomWidth: 0,
    backgroundColor: Color.input,
    padding: 10,
  };

  const labelStyle = {
    fontSize: 18,
    // fontFamily: 'Montserrat-Medium',
    fontWeight: 'normal',
  };

  const inputStyle = {
    fontSize: 16,
  };

  return (
    <Input
      label={title}
      placeholder={placeholder}
      inputContainerStyle={inputContainerStyle}
      labelStyle={labelStyle}
      inputStyle={inputStyle}
      secureTextEntry={visible}
      rightIcon={secret ? eyeButton(visible, setVisible) : undefined}
      leftIcon={leftIcon ? <Icon name={leftIcon} size={20} /> : undefined}
    />
  );
};
