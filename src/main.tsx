import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/global.css';
import theme from './style/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
