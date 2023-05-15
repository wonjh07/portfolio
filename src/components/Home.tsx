import styled from 'styled-components';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Jaeho Won's Portfolio</title>
      </Helmet>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  user-select: none;
  min-width: 800px;
`;

const Footer = styled.div`
  width: 100%;
  height: 200px;
`;
