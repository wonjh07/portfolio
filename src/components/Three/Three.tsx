import styled from 'styled-components';
import { KeyboardControls, Sky, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Suspense } from 'react';
import ChristmasTown from './ChristmasTown';
import Player from './Player';
import Snow from './Snow';
import Plain from './Plain';

function Three() {
  return (
    <>
      <Container>
        <KeyboardControls
          map={[
            { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
            { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
            { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
            { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
            { name: 'dash', keys: ['ShiftLeft'] },
            { name: 'position', keys: ['q', 'Q'] },
            { name: 'dance', keys: ['f', 'F'] },
          ]}>
          <Canvas dpr={[0.8, 1.2]}>
            <Snow />
            <Sky sunPosition={[0, 0, 0]} />
            <ambientLight intensity={0.7} color={'#d0bdaa'} />
            <pointLight
              intensity={2}
              position={[2, 50, 10]}
              distance={80}
              color={'white'}
              castShadow
            />
            <Suspense>
              <Physics gravity={[0, -20, 0]} colliders={false}>
                <Player />
                <ChristmasTown />
              </Physics>
            </Suspense>
          </Canvas>
        </KeyboardControls>
      </Container>
    </>
  );
}

export default Three;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
