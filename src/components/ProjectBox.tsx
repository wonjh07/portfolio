import styled from "styled-components";

function ProjectBox() {
  const boxClick = () => {
    alert("프로젝트 준비중입니다.");
  };

  return (
    <>
      <GridBox>
        <Box onClick={boxClick} bgColor="tomato">
          <Title>Project</Title>
        </Box>
        <Box onClick={boxClick} bgColor="skyblue">
          <Title>Project</Title>
        </Box>
        <Box onClick={boxClick} bgColor="violet">
          <Title>Project</Title>
        </Box>
        <Box onClick={boxClick} bgColor="green">
          <Title>Project</Title>
        </Box>
      </GridBox>
    </>
  );
}

export default ProjectBox;

const GridBox = styled.div`
  display: grid;
  width: 500px;
  max-width: 1000px;
  margin: 10px 10px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  box-sizing: border-box;
  gap: 10px;
  padding: 10px;

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    width: 1000px;
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
  font-size: 40px;
`;
