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
          <Description>HI</Description>
        </Flexbox>
      </Container>
    </>
  );
}

export default Profile;

const Container = styled.div`
  width: 1200px;
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
  border-radius: 400px;
  box-sizing: border-box;
`;

const Description = styled.div`
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #e3e3e3;
`;
