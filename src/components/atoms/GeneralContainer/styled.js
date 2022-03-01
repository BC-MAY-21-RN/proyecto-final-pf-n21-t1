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
  margin-bottom: ${props => props.marginBottom};
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  border: ${props => props.border};
  border-color: ${props => props.borderColor};
`;
