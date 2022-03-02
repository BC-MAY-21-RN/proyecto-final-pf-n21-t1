import styled from 'styled-components';

export const HeaderContainer = styled.View`
  flex-direction: column;
  height: 20%;
  width: 100%;
`;

export const Row = styled.View`
  align-self: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  background-color: #ffff;
  flex-direction: row;
  width: 100%;
  height: 50%;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  elevation: 5;
  width: 90%;
`;
export const Logo = styled.Image`
  width: 110px;
  height: 55px;
  margin-top: 4%;
  margin-left: 3%;
`;

export const Menu = styled.TouchableOpacity`
  margin-top: 6%;
  margin-right: 3%;
`;

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
`;
