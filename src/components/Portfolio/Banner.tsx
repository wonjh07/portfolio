import styled from 'styled-components';
import { LinearText } from '../../style/style';
import { Canvas } from '@react-three/fiber';
import Stars from './Stars';

const Banner = () => {
  return (
    <>
      <Container>
        <Text>
          <p>안녕하세요,</p>
          <p>FRONTEND DEVELOPER</p>
          <p>원재호 입니다.</p>
        </Text>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </Container>
    </>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 400px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right top, #121212, #353335);
`;

const Text = styled(LinearText)`
  position: absolute;
  gap: 20px;
  animation-name: fadeIn;
  animation-duration: 2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 2;
    }
  }
`;
