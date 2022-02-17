import React from 'react';
import {GeneralInput} from '../components/atoms';
import {InputContainer} from '../components/atoms/GeneralInput/styled';

export default function inputsMapping(generalInputs) {
  const inputs = generalInputs.map(
    (
      input,
      index, //input=item
    ) => (
      <GeneralInput
        key={index}
        title={input.title}
        placeholder={input.placeholder}
        leftIcon={input.icon}
        secret={input.secret}
        value={input.value}
        onChangeText={input.onChangeText}
        errorMessage={input.errorMessage}
      />
    ),
  );
  return <InputContainer>{inputs}</InputContainer>;
}
