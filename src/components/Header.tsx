import styled from "styled-components";

function Header() {
  return (
    <>
      <Container>
        <Logo>Jaeho Won Portfolio</Logo>
        <Buttons>
          <T1>BUTTON</T1>
          <T1>BUTTON</T1>
          <T1>BUTTON</T1>
        </Buttons>
      </Container>
    </>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eaeaea;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 0 10px;
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
  font-size: 32px;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
`;

const T1 = styled.p`
  font-size: 16px;
  width: 100px;
  cursor: pointer;
  box-sizing: border-box;
  :hover {
    font-weight: bold;
  }
  text-align: center;
`;
