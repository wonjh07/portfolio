import styled from 'styled-components';
import * as s from '../style/style';
import me from '../assets/images/me.jpeg';

function Profile() {
  return (
    <>
      <Container>
        <s.MenuTitle>프로필</s.MenuTitle>
        <Flexbox>
          <Photo me={me} />
          <Description>
            <p> 원재호 </p>
            <p> 1992.07.19 </p>
            <p> #세종대학교 </p>
            <p> #기계공학과 #비전공자 </p>
            <p> #3개국어 #🇰🇷🇺🇸🇯🇵 </p>
            <p> #SSAFY7기 </p>
          </Description>
        </Flexbox>
      </Container>
    </>
  );
}

export default Profile;

const Container = styled.div`
  width: 1000px;
  margin-bottom: 60px;
`;

const Flexbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Photo = styled.div<{ me: string }>`
  width: 40%;
  aspect-ratio: 1;
  background-image: url(${(props) => props.me});
  background-size: 100%;
  border-radius: 40px;
  box-sizing: border-box;
`;

const Description = styled.div`
  width: 50%;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 2rem;
  font-family: 'Samsung Gothic';
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  font-weight: bold;
  gap: 20px;
  color: #424242;
`;
