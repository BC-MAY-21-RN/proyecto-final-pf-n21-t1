import styled from 'styled-components';
import {Color} from '../../../theme/default';

export const LinkStyle = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-self: flex-start;
`;

export const ContainerScreen = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Container = styled.TouchableOpacity`
  background-color: ${Color.background};
  width: 220px;
  height: 130px;
  margin-top: 20%;
  position: absolute;
  right: 0;
  margin-right: 4%;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  elevation: 5;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;
