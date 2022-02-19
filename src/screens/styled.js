import styled from 'styled-components';

export const PickerWrapper = styled.View`
  flex-direction: row;
`;

export const CenterView = styled.View`
  height: 10%;
  align-self: center;
  width: 90%;
  align-items: center;
  justify-content: center;
`;

export const MarginView = styled.View`
  align-items: center;
  justify-content: flex-end;
  margin-horizontal: 10px;
  height:${props => (props.height ? props.height : '8%')};
`;

export const InputView = styled.View`
  height: 22%;
  align-items: center;
  justify-content: center;
`

