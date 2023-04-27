import styled from 'styled-components';
import * as s from '../../style/style';

const ProjectBox = () => {
  const boxClick = (a: string = 'hi') => {
    alert(a);
  };

  return (
    <>
      <s.Container>
        <s.MenuTitle>Projects</s.MenuTitle>
        <GridBox>
          <Box onClick={() => boxClick()}>
            <s.Title>Project</s.Title>
          </Box>
          <Box onClick={() => boxClick()}>
            <s.Title>Project</s.Title>
          </Box>
          <Box onClick={() => boxClick()}>
            <s.Title>Project</s.Title>
          </Box>
          <Box onClick={() => boxClick()}>
            <s.Title>Project</s.Title>
          </Box>
        </GridBox>
      </s.Container>
    </>
  );
};

export default ProjectBox;

const GridBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  box-sizing: border-box;
  gap: 10px;
  padding: 10px;
`;

const Box = styled.div`
  width: 100%;
  aspect-ratio: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  box-shadow: 1px 1px 8px grey;
  cursor: pointer;

  :hover {
    transition: all 0.2s ease-in-out;
    scale: 1.01;
    box-shadow: 0px 0px 10px grey;
  }
`;
