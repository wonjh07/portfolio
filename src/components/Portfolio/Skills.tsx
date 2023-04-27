import styled from 'styled-components';
import * as s from '../../style/style';

const Skills = () => {
  return (
    <>
      <s.Container>
        <s.MenuTitle>Skills</s.MenuTitle>
        <CardBox>
          <Card>
            <Title>Front-end</Title>
            <Stack>
              <p>HTML5, CSS3, JavaScript (ES6)</p>
              <p>React, TypeScript</p>
              <p>React Redux, Recoil, React Router</p>
              <p>Styled Components, Emotion</p>
              <p>Three.js</p>
              <p>React Three Fiber</p>
            </Stack>
          </Card>
          <Card>
            <Title>Back-end</Title>
            <Stack>
              <p>Python</p>
              <p>Django</p>
            </Stack>
          </Card>
          <Card>
            <Title>Dev-ops</Title>
            <Stack>
              <p>MySQL</p>
              <p>AWS-EC2</p>
            </Stack>
          </Card>
          <Card>
            <Title>Tools & Collaboration</Title>
            <Stack>
              <p>VS Code, Vim, Linux</p>
              <p>Git, Github, Figma</p>
              <p>Jira, Slack, Mattermost</p>
            </Stack>
          </Card>
        </CardBox>
      </s.Container>
    </>
  );
};

export default Skills;

const CardBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-top: 30px;
`;

const Card = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;
const Title = styled.div`
  width: 50%;
  font-size: 1.6rem;
  font-family: 'Samsung Gothic';
  font-weight: medium;
  padding-left: 40px;
`;
const Stack = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.4rem;
  font-family: 'Samsung Gothic';
  font-weight: medium;
  color: #424242;
`;
