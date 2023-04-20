import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import '../style/font.css';
import Resume from '../components/Resume/Resume';
import Portfolio from '../components/Portfolio/Portfolio';
import Demos from '../components/Demos/Demos';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="" element={<Portfolio />} />
        <Route path="resume" element={<Resume />} />
        <Route path="demos" element={<Demos />} />
      </Route>
    </Routes>
  );
};

export default Router;
