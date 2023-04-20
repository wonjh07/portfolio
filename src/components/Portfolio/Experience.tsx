import styled from 'styled-components';
import * as s from '../../style/style';

function Experience() {
  return (
    <>
      <s.Container>
        <s.MenuTitle>Experience</s.MenuTitle>
        <CardBox>
          <Card>
            <Time>2022.01 ~ 2022.12</Time>
            <Title>삼성 청년 SW 아카데미 7기</Title>
            <Desc>상위 5%內 최우수 교육생</Desc>
            <Desc>삼성 SW 역량테스트 모의 A+</Desc>
          </Card>
          <Card>
            <Time>2021.10</Time>
            <Title>42 SEOUL 5기 La Picine</Title>
          </Card>
          <Card>
            <Time>2021.05 ~ 2021.07</Time>
            <Title>코드잇 코딩 캠프 6기</Title>
          </Card>
          <Card>
            <Time>2019.01 ~ 2020.06</Time>
            <Title>미국 어학연수</Title>
            <Desc>Calstate State University, Long Beach</Desc>
          </Card>
          <Card>
            <Time>2018.02</Time>
            <Title>🎓 세종대학교 졸업</Title>
          </Card>
          <Card>
            <Time>2016.04 ~ 2017.02</Time>
            <Title>캐나다 어학연수</Title>
            <Desc>Euro Centre, Toronto</Desc>
          </Card>
          <Card>
            <Time>2011.03</Time>
            <Title>🏛️ 세종대학교 입학</Title>
            <Desc>기계공학과</Desc>
          </Card>
        </CardBox>
      </s.Container>
    </>
  );
}

export default Experience;

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
  font-size: 1.4rem;
`;
