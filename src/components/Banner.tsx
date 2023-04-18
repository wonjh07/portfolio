import styled from 'styled-components';

function Banner() {
  return (
    <>
      <Container>BANNER</Container>
    </>
  );
}

export default Banner;

const Container = styled.div`
  width: 800px;
  height: 200px;
  background-color: #628796;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
