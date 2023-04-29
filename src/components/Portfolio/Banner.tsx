import styled from 'styled-components';
import { LinearText } from '../../style/style';
import { Canvas } from '@react-three/fiber';
import Stars from './Stars';

const Banner = () => {
  return (
    <>
      <Container>
        <Text>
          <p>반갑습니다,</p>
          <p>WEB FRONTEND DEVELOPER</p>
          <p>원재호 입니다.</p>
        </Text>
        <Canvas>
          <Stars />
        </Canvas>
      </Container>
    </>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 500px;
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
  user-select: none;
  z-index: 1;
  pointer-events: none;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 2;
    }
  }
`;
