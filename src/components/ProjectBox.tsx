import styled from 'styled-components';

function ProjectBox() {
  const boxClick = (a: string = 'hi') => {
    alert(a);
  };

  return (
    <>
      <Container>
        <MenuTitle>프로젝트 포트폴리오</MenuTitle>
        <GridBox>
          <Box onClick={() => boxClick('111111')} bgColor="tomato">
            <Title>Project</Title>
          </Box>
          <Box onClick={() => boxClick()} bgColor="skyblue">
            <Title>Project</Title>
          </Box>
          <Box onClick={() => boxClick()} bgColor="violet">
            <Title>Project</Title>
          </Box>
          <Box onClick={() => boxClick()} bgColor="green">
            <Title>Project</Title>
          </Box>
        </GridBox>
      </Container>
    </>
  );
}

export default ProjectBox;

const Container = styled.div`
  width: 800px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lemonchiffon;
`;

const GridBox = styled.div`
  display: grid;
  width: 400px;
  max-width: 800px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  box-sizing: border-box;
  gap: 10px;
  padding: 10px;
  background-color: grey;

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    width: 800px;
  }
`;

const Box = styled.div<{ bgColor: string }>`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${(props) => props.bgColor};
  box-sizing: border-box;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 1px 1px 7px grey;
  cursor: pointer;
  user-select: none;

  :hover {
    transition: all 0.12s ease-in-out;
    scale: 1.01;
    box-shadow: 0px 0px 10px grey;
  }
`;

const Title = styled.p`
  text-align: center;
  font-family: 'Samsung Gothic';
  font-size: 30px;
`;

const MenuTitle = styled.p`
  width: 100%;
  text-align: start;
  background-color: aquamarine;
  font-family: 'Samsung Gothic';
  font-size: 2rem;
  font-weight: bold;
  margin: 10px 0;
`;
