import styled from 'styled-components';
import * as s from '../../style/style';
import { Canvas } from '@react-three/fiber';
import Snow from '../Three/Snow';
import interSanta from '../../assets/images/internsanta.gif';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

const ProjectBox = () => {
  const [modal, setModal] = useState(true);

  return (
    <>
      <Container>
        <s.MenuTitle>Projects</s.MenuTitle>
      </Container>
      <Project modal={modal}>
        <FlexBox>
          <Button modal={modal} onClick={() => setModal(!modal)}>
            <AiOutlinePlusCircle />
          </Button>
          {modal ? (
            <TextBox>
              <Title>인턴산타</Title>
              <Time>2022.10.11 ~ 2022.11.21</Time>
              <Role>Web Frontend Developer</Role>
              <Desc>WebGL 기반의 크리스마스 테마 웹 게임 서비스</Desc>
              <Results>
                React, Three.js를 사용하여 월드 맵, 오브젝트, 물리엔진 구현 및
                전반적인 시스템 UI 개발
              </Results>
              <Results>
                마우스와 키보드로 움직이는 3인칭 캐릭터 조작 개발
              </Results>
              <Results>
                react-three-fiber 라이브러리를 기반으로 3D 컴포넌트 최적화를
                통해 로딩시간 28초 → 10초 개선
              </Results>
              <Results>
                3D 모델링(glb, gltf) 파일의 정보를 압축하고 전송하여 전체용량의
                97% 감소
              </Results>
            </TextBox>
          ) : (
            <ImageBox>
              <Image img={interSanta} />
              <Canvas>
                <Snow />
              </Canvas>
            </ImageBox>
          )}
        </FlexBox>
      </Project>
    </>
  );
};

export default ProjectBox;

const Container = styled.div`
  width: 800px;
  margin-top: 60px;
`;

const Project = styled.div<{ modal: boolean }>`
  width: 100%;
  height: 500px;
  background-color: ${(props) => (props.modal ? `#e0e3ec` : `#717889`)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
`;

const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const TextBox = styled.div`
  width: 760px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  animation-name: fadeIn;
  animation-duration: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div<{ img: string }>`
  width: 700px;
  height: 360px;
  position: absolute;
  background-image: url(${(props) => props.img});
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 14px;
  box-sizing: border-box;
  z-index: 2;
`;

const Title = styled.p`
  font-size: 2.8rem;
  font-weight: bold;
`;

const Time = styled.p`
  font-size: 1.4rem;
  color: #989898;
`;

const Role = styled.p`
  font-size: 1.4rem;
  color: #646464;
`;

const Desc = styled.p`
  font-size: 1.4rem;
`;

const Results = styled.li`
  font-size: 1.1rem;
  font-family: 'Samsung Gothic';
`;

const Button = styled.div<{ modal: boolean }>`
  position: absolute;
  transform: translate(380px, -210px);
  width: 40px;
  height: 40px;
  border-radius: 40px;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    color: ${(props) => (props.modal ? `#4a4a4a` : `#ffffff`)};
  }
  z-index: 2;
`;
