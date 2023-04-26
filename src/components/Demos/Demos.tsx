import { Link } from 'react-router-dom';
import * as s from '../../style/style';

function Demos() {
  return (
    <>
      <s.Container>
        <s.MenuTitle>Demos</s.MenuTitle>
        <Link to="/three">Three.js</Link>
      </s.Container>
    </>
  );
}

export default Demos;
