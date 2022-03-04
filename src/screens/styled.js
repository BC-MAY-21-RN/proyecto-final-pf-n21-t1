import styled from 'styled-components';
const center = 'align-items: center; justify-content: center;';
const centerEnd = 'align-items: center; justify-content: flex-end;';

export const PickerWrapper = styled.View`
  height: 70%;
  flex-direction: column;
  margin: 20px;
  margin-bottom: 40px;
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
  height: 28%;
  margin-bottom: 20px;
  ${center}
`;

export const ButtonContainer = styled.View`
  margin-bottom: 20px;
  ${center}
`;

export const CntrView = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  height: 80%;
`;

export const CntrComponent = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  height: 25%;
`;

export const MrgnView = styled.View`
  width: 80%;
  height: 90%;
`;
export const PckrWrapper = styled.View`
  height: 12%;
`;