import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Container>
        <WidthControl>
          <Logo>Jaeho Won</Logo>
          <Buttons>
            <T1 to="">Portfolio</T1>
            <T1 to="/resume">Resume</T1>
            <T1 to="/demos">Demos</T1>
          </Buttons>
        </WidthControl>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0px -8px 30px grey;
`;

const WidthControl = styled.div`
  width: 800px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Buttons = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  box-sizing: border-box;
`;

const Logo = styled.div`
  font-family: 'Samsung Gothic';
  font-size: 1.6rem;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
`;

const T1 = styled(Link)`
  font-size: 1rem;
  font-family: 'Samsung Gothic';
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
  :hover {
    color: #8916d0;
    scale: 1.05;
  }
  text-align: center;
  text-decoration: none;
  color: black;
`;
