import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import '../style/font.css';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
