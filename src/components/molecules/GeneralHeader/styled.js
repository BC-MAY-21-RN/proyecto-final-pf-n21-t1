import styled from 'styled-components';

export const HeaderContainer = styled.View`
  flex-direction: column;
  height: 15%;
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
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  elevation: 5;
  width: 95%;
`;
export const Logo = styled.Image`
  height: 100%;
  margin-left: 3%;
  aspect-ratio: 1;
`;

export const LogoContainer = styled.View`
  height: 150%;
`;

export const Menu = styled.TouchableOpacity`
 right: 85%;
`;

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
`;
