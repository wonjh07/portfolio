import styled from 'styled-components';
import Header from './Header';
import ProjectBox from './ProjectBox';
import Banner from './Banner';
import Profile from './Profile';

function Home() {
  return (
    <>
      <Container>
        <Header />
        <Banner />
        <Profile />
        <ProjectBox />
        <Footer />
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 1200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  user-select: none;
  background-color: #f3f3f3;
`;

const Footer = styled.div`
  width: 100%;
  height: 200px;
`;
