import styled from 'styled-components';

function Header() {
  return (
    <>
      <Container>
        <Logo>Jaeho Won</Logo>
        <Buttons>
          <T1>Profile</T1>
          <T1>Projects</T1>
          <T1>Resume</T1>
          <T1>Demos</T1>
        </Buttons>
      </Container>
    </>
  );
}

export default Header;

const Container = styled.div`
  width: 1000px;
  height: 60px;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
`;

const T1 = styled.p`
  font-size: 1rem;
  font-family: 'Samsung Gothic';
  width: 100px;
  cursor: pointer;
  box-sizing: border-box;
  :hover {
    font-weight: bold;
  }
  text-align: center;
`;
