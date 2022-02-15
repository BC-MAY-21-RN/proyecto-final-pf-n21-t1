import styled from 'styled-components';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ModalView = styled.View`
  padding-top: 5%;
  background-color: white;
  border-radius: 20;
  width: 370;
  justify-content: center;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadowradius: 4;
  elevation: 5;
  shadow-offset: {width: 0, height: 2};
`;

export const StarPosition = styled.TouchableOpacity`
  margin-bottom: 3%;
`;

export const TextCenter = styled.View`
  margin-left: 11%;
`;
