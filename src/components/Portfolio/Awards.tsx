import styled from 'styled-components';
import * as s from '../../style/style';

function Awards() {
  return (
    <>
      <s.Container>
        <s.MenuTitle>Awards</s.MenuTitle>
        <CardBox>
          <Card>
            <Time>2022.11.25</Time>
            <Title>🥈 우수상</Title>
            <Desc>삼성 청년 SW 아카데미</Desc>
            <Desc>2022.10.11 ~ 2022.11.25</Desc>
            <Desc>2학기 자율 프로젝트 서울 2반 2등</Desc>
          </Card>
          <Card>
            <Time>2022.10.07</Time>
            <Title>🥈 우수상</Title>
            <Desc>삼성 청년 SW 아카데미</Desc>
            <Desc>2022.08.22 ~ 2022.10.07</Desc>
            <Desc>2학기 특화 프로젝트 서울 5반 2등</Desc>
          </Card>
          <Card>
            <Time>2022.08.19</Time>
            <Title>🥇 우수상</Title>
            <Desc>삼성 청년 SW 아카데미</Desc>
            <Desc>2022.07.05 ~ 2022.08.19</Desc>
            <Desc>2학기 공통 프로젝트 서울 4반 1등</Desc>
          </Card>
          <Card>
            <Time>2022.05.27</Time>
            <Title>🥇 1학기 프로젝트 최우수상</Title>
            <Desc>삼성 청년 SW 아카데미</Desc>
            <Desc>2022.01.05 ~ 2022.05.27</Desc>
            <Desc>1학기 관통 프로젝트 서울 1반 1등</Desc>
          </Card>
          <Card>
            <Time>2022.05.27</Time>
            <Title>🥉 1학기 성적 우수상</Title>
            <Desc>삼성 청년 SW 아카데미</Desc>
            <Desc>2022.01.05 ~ 2022.05.27</Desc>
            <Desc>1학기 코딩 집중과정 종합성적 서울 1반 3등</Desc>
          </Card>
        </CardBox>
      </s.Container>
    </>
  );
}

export default Awards;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: center;
  font-family: 'Samsung Gothic';
  font-size: 30px;
  border-left: 2px solid black;
  padding-bottom: 30px;
  margin-left: 300px;
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 40px;
  gap: 10px;

  ::before {
    content: '';
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 20px;
    left: -50px;
    top: 42px;
    border: #8916d0 solid 4px;
    background: #ffffff;
  }
`;

const Time = styled.p`
  width: 300px;
  position: relative;
  height: 0px;
  left: -386px;
  top: 10px;
  background-color: tomato;
  text-align: end;
  font-size: 1.8rem;
  color: #484748;
`;

const Title = styled.p`
  color: #000000;
  font-size: 1.8rem;
`;

const Desc = styled.p`
  color: grey;
  font-size: 1.2rem;
`;
