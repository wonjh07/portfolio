import styled from 'styled-components';
import * as s from '../style/style';

function ProjectBox() {
  const boxClick = (a: string = 'hi') => {
    alert(a);
  };

  return (
    <>
      <Container>
        <s.MenuTitle>프로젝트 포트폴리오</s.MenuTitle>
        <GridBox>
          <Box onClick={() => boxClick('111111')} bgColor="tomato">
            <s.Title>Project</s.Title>
          </Box>
          <Box onClick={() => boxClick()} bgColor="skyblue">
            <s.Title>Project</s.Title>
          </Box>
          <Box onClick={() => boxClick()} bgColor="violet">
            <s.Title>Project</s.Title>
          </Box>
          <Box onClick={() => boxClick()} bgColor="green">
            <s.Title>Project</s.Title>
          </Box>
        </GridBox>
      </Container>
    </>
  );
}

export default ProjectBox;

const Container = styled.div`
  width: 1200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GridBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  box-sizing: border-box;
  gap: 10px;
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
  border-radius: 30px;
  box-shadow: 1px 1px 7px grey;
  cursor: pointer;

  :hover {
    transition: all 0.12s ease-in-out;
    scale: 1.01;
    box-shadow: 0px 0px 10px grey;
  }
`;
