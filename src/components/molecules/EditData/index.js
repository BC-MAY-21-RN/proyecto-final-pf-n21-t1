import React, {useEffect, useState} from 'react';
import triggerValidation from '../../../utils/authentication/inputValidations';
import {GeneralInput, ImageButton} from '../../atoms';

const getInput = (formHook, data, type) => {
  const {form, setForm} = formHook;
  return {
    title: data.title,
    placeholder: data.title,
    secret: type === 'password' ? true : false,
    onChangeText: text => {
      setForm({...form, [type]: text});
      triggerValidation(text, data.trigger, data.setError);
    },
    errorMessage: data.error,
    value: form[type],
  };
};

export const EditData = ({formHook, imageHook, edition}) => {
  const {image, setImage, setFile} = imageHook;
  const {setOk} = formHook;
  const [nameError, setNameError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [notesError, setNotesError] = useState();

  useEffect(() => {
    if (nameError || phoneError || notesError) setOk(false);
    else setOk(true);
  }, [nameError, phoneError, notesError]);

  const typeData = {
    phone: {
      title: 'Teléfono',
      error: phoneError,
      setError: setPhoneError,
      trigger: 'phone',
    },
    name: {
      title: 'Nombre',
      error: nameError,
      setError: setNameError,
      trigger: 'name',
    },
    notes: {
      title: 'Notas',
      error: notesError,
      setError: setNotesError,
      trigger: 'name',
    },
  };

  return (
    <>
      <ImageButton image={image} setImage={setImage} setFile={setFile} />
      {edition && (
        <GeneralInput {...getInput(formHook, typeData.name, 'name')} />
      )}
      <GeneralInput {...getInput(formHook, typeData.phone, 'phone')} />
      <GeneralInput {...getInput(formHook, typeData.notes, 'notes')} />
    </>
  );
};
