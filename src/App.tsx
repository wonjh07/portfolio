import { HelmetProvider } from 'react-helmet-async';
import Router from './routes/index';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <HelmetProvider>
          <Router />
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
