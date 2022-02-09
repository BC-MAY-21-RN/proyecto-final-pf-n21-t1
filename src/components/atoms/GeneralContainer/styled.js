import styled from 'styled-components';
import {Color} from '../../../theme/default';

export const ContainerGeneral = styled.View`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${Color.hover};
  border-radius: 15px;
  align-self: center;
  flex-direction: ${props => (props.direction ? 'row' : 'column')};
  justify-content: space-around;
`;
