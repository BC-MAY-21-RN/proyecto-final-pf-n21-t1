import React from 'react';
import DatePicker from 'react-native-date-picker';
import {PickerWrapper} from '../../../screens/styled';

export const TimePickers = ({
  beginTime,
  setBeginTime,
  finishTime,
  setFinishTime,
}) => {
  return (
    <PickerWrapper>
      <DatePicker mode="time" date={beginTime} onDateChange={setBeginTime} />
      <DatePicker mode="time" date={finishTime} onDateChange={setFinishTime} />
    </PickerWrapper>
  );
};
