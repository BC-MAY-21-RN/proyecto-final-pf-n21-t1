import styled from 'styled-components';

export const GroupRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.qualifyButton ? 'space-evenly' : 'center'};
  margin-top: 1%;
`;
export const GroupColumn = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 3%;
  margin-left: 5%;
`;
export const ShadowView = styled.View`
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
`;
