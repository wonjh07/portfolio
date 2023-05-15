import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import '../style/font.css';
import Portfolio from '../components/Portfolio/Portfolio';
import Demos from '../components/Demos/Demos';
import Three from '../components/Three/Three';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="" element={<Portfolio />} />
        <Route path="demos" element={<Demos />} />
      </Route>
      <Route path="three" element={<Three />} />
    </Routes>
  );
};

export default Router;
