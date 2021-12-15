import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import AuthForm from 'components/pages/Auth';
import NotFound from 'components/pages/NotFound';
import Home from 'components/pages/Home';
import { ThemeProvider } from '@emotion/react';
import React, { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import './App.css';
import { CustomAlert } from './components/Alert';

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

  const [alerts, setAlerts] = useState(false);
  const [alertsValues, setAlertsValues] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path={['/', '/folder/:id']} component={Home} />
          <Route
            exact
            path={['/signIn', '/signUp']}
            render={() => (
              <AuthForm
                setAlertsValues={setAlertsValues}
                setAlerts={setAlerts}
              />
            )}
          />
          <Route exact path="*" component={NotFound} />
        </Switch>
        {alerts ? (
          <CustomAlert
            setAlertsValues={setAlertsValues}
            alertsValues={alertsValues}
          />
        ) : (
          <></>
        )}
      </Router>
    </ThemeProvider>
  );
};

export default App;
