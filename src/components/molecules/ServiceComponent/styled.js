import styled from 'styled-components';

export const ServiceButtons = styled.View`
  display: flex;
  align-self: center;
  width: 95%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
`;

export const ServiceImage = styled.Image`
  margin-top: 10%;
  width: 70%;
  height: 65%;
  align-self: center;
`;

export const Touchable = styled.TouchableOpacity`
  width: 50%;
  align-self: center;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2); //Adri favor de quitarselo si se ve feo
`;
