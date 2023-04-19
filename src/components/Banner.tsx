import styled from 'styled-components';

function Banner() {
  return (
    <>
      <Container>
        <Text>FRONTEND DEVELOPER</Text>
      </Container>
    </>
  );
}

export default Banner;

const Container = styled.div`
  width: 1200px;
  height: 200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-family: 'Samsung Gothic';
  font-size: 80px;
  font-weight: bold;
  background: linear-gradient(to right top, #330646, #9b23e6, #ff9e96);
  color: transparent;
  -webkit-background-clip: text;
`;
