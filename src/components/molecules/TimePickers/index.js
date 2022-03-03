import React from 'react';
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
}) => {
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
      <GeneralButton
        title={buttonTitle}
        color="secondary"
        action={() => action()}
      />
    </MarginView>
  );
};
