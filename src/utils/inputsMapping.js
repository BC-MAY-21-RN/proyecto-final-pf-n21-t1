import React from 'react';
import {GeneralInput} from '../components/atoms';

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
      />
    ),
  );
  return inputs;
}
