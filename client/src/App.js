import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from 'components/Header';
import AuthForm from 'components/pages/Auth';
import NotFound from 'components/pages/NotFound';
import Home from 'components/pages/Home';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { createTheme } from '@mui/material/styles';
import './App.css';

export const theme = createTheme({
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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/folder/:id" element={<Home />} />
          <Route path="/signIn" element={<AuthForm state={true} />} />
          <Route path="/signUp" element={<AuthForm state={false} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
