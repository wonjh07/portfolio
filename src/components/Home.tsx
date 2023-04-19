import styled from 'styled-components';
import Header from './Header';
import ProjectBox from './ProjectBox';
import Banner from './Banner';
import Profile from './Profile';
import Slogan from './Slogan';

function Home() {
  return (
    <>
      <Container>
        <Header />
        <Banner />
        <Profile />
        <Slogan />
        <Footer />
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  user-select: none;
  min-width: 1000px;
`;

const Footer = styled.div`
  width: 100%;
  height: 200px;
`;
