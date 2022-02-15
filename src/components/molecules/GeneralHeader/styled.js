import styled from 'styled-components';

export const HeaderContainer = styled.View`
  flex-direction: column;
  height: 20%;
  width: 100%;
  //margin-top: 15%;
`;

export const Header = styled.View`
  background-color: #ffff;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  flex-direction: row;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
`;
export const Logo = styled.Image`
  width: 110px;
  height: 55px;
  margin-top: 5%;
  margin-left: 3%;
`;

export const Menu = styled.TouchableOpacity`
  margin-top: 6%;
  margin-right: 3%;
`;
