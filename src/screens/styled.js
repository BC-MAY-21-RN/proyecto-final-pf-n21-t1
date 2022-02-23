import styled from 'styled-components';
const center = 'align-items: center; justify-content: center;';
const centerEnd = 'align-items: center; justify-content: flex-end;';

export const PickerWrapper = styled.View`
  flex-direction: row;
`;

export const CenterView = styled.View`
  height: 10%;
  align-self: center;
  width: 90%;
  ${center}
`;

export const MarginView = styled.View`
  ${centerEnd}
  margin-horizontal: 10px;
  height: ${({height}) => (height ? height : '8%')};
`;

export const InputView = styled.View`
  height: 22%;
  ${center}
`;
