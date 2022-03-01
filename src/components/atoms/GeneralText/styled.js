import styled from 'styled-components';

export const AppText = styled.Text`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: ${props => (props.weight ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-align: ${props => (props.justify ? props.justify : 'auto')};
`;
export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
