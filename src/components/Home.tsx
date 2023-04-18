import styled from 'styled-components';
import Header from './Header';
import ProjectBox from './ProjectBox';
import Banner from './Banner';

function Home() {
  return (
    <>
      <Container>
        <Header />
        <Banner />
        <ProjectBox />
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  min-width: 742px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
