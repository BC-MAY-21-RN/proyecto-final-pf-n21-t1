import styled from 'styled-components';

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: space-around;
  height: ${props => (props.height ? props.height : '20%')};
`;

export const ButtonStyle = styled.View`
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;