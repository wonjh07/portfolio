import styled from 'styled-components';

const Slogan = () => {
  return (
    <>
      <Container>
        <p>경청과 존중, 제가 소통에서 가장 중요하게 생각하는 가치입니다.</p>
        <p>새로운 도전과, 경험 그리고 학습에서 성취감을 얻는 개발자 입니다.</p>
        <p>편리한 일상을 만들고 사회에 보탬이 되는 개발자가 되고 싶습니다.</p>
      </Container>
    </>
  );
}

export default Slogan;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  font-size: 1.6rem;
  font-family: 'Samsung Gothic';
  font-weight: bold;
  background-color: #f6f8fa;
  color: #424242;
`;
