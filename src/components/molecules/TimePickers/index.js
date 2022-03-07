import React, {useEffect} from 'react';
import DatePicker from 'react-native-date-picker';
import {MarginView, PickerWrapper} from '../../../screens/styled';
import {GeneralButton, GeneralText} from '../../atoms';

export const TimePickers = ({
  beginTime,
  setBeginTime,
  finishTime,
  setFinishTime,
  action,
  textTitle,
  buttonTitle,
  disabled,
  children,
  errors,
}) => {
  const {setError, setOk, isOk} = errors;
  useEffect(() => {
    if (beginTime > finishTime) {
      setError('La fecha no es correcta');
      setOk(false);
    } else {
      setError();
      setOk(true);
    }
  }, [beginTime, finishTime]);

  return (
    <MarginView height={'600px'}>
      <GeneralText
        title={textTitle}
        size="h2"
        color={'primary'}
        weight={'bold'}
        justify={'center'}
      />
      <PickerWrapper>
        <DatePicker mode="time" date={beginTime} onDateChange={setBeginTime} />
        <DatePicker
          mode="time"
          date={finishTime}
          onDateChange={setFinishTime}
        />
      </PickerWrapper>
      {children}
      <GeneralButton
        title={buttonTitle}
        color="secondary"
        action={() => action()}
        disabled={!isOk}
      />
    </MarginView>
  );
};
