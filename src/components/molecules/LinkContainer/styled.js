import styled from 'styled-components';

export const LinkBox = styled.View`
  height: ${props => (props.height ? props.height : '20%')};
  align-items: center;
  justify-content: center;
`;
