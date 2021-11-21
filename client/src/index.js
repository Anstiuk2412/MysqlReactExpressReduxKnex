import './index.css';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Index } from './components/Header';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AuthForm from './components/pages/Auth';
import NotFound from './components/pages/NotFound';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FA4616',
      light: '#7986CB',
      dark: '#303F9F',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const rootElement = document.getElementById('root');
render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Index />
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  rootElement,
);

reportWebVitals();
