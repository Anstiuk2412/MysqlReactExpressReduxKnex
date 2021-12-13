import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import AuthForm from 'components/pages/Auth';
import NotFound from 'components/pages/NotFound';
import Home from 'components/pages/Home';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { createTheme } from '@mui/material/styles';
import './App.css';

const App = () => {
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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path={['/', '/folder/:id']} component={Home} />
          <Route exact path={['/signIn', '/signUp']} component={AuthForm} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
