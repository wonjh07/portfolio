import styled from 'styled-components';
import * as s from '../../style/style';
import me from '../../assets/images/me.jpeg';

const Profile = () => {
  return (
    <>
      <s.Container>
        <s.MenuTitle>Profile</s.MenuTitle>
        <Flexbox>
          <Photo me={me} />
          <Description>
            <p> 원재호 </p>
            <p> 1992.07.19 </p>
            <p> #ENFP #세종대학교 </p>
            <p> #기계공학과 #비전공자 </p>
            <p> #3개국어 #🇰🇷🇺🇸🇯🇵 </p>
            <p> #SSAFY7기 #42 Seoul</p>
          </Description>
        </Flexbox>
      </s.Container>
    </>
  );
};

export default Profile;

const Flexbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 60px;
`;

const Photo = styled.div<{ me: string }>`
  width: 40%;
  aspect-ratio: 1;
  background-image: url(${(props) => props.me});
  background-size: 100%;
  border-radius: 30px;
  box-sizing: border-box;
`;

const Description = styled.div`
  width: auto;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 1.8rem;
  font-family: 'Samsung Gothic';
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-weight: bold;
  gap: 20px;
  color: #424242;
`;
