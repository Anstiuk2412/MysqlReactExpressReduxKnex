import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Header from 'components/Header';
import AuthForm from 'components/pages/Auth';
import NotFound from 'components/pages/NotFound';
import Home from 'components/pages/Home';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { createTheme } from '@mui/material/styles';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { addSharedFilesByLink } from './actions/files.js';

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
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route
              exact
              path={['/', '/folder/:id', '/sharedFiles']}
              component={Home}
            />
            <Route
              exact
              path={['/signIn', '/signUp']}
              render={() => <AuthForm />}
            />
            <Route
              exact
              path="/addFileByPath/:token"
              render={(props) => {
                addSharedFilesByLink(props.match.params.token).then(
                  ({ data }) => alert(data.message),
                );
                return <Redirect exact to={''} />;
              }}
            />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
