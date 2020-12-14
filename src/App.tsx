import 'fontsource-roboto'
import './App.css';
import React, { } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { CalculatorPage } from './pages/CalculatorPage';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { AppToolBar } from './components/AppToolbar';
import Theme from './timeCodeMuiTheme';

const App: React.FC = () => {
  const RouterToolbar = withRouter(AppToolBar)

  return (
    <ThemeProvider theme={Theme}>
      <RouterToolbar />
      <Switch>
        <Route exact path='/' component={CalculatorPage} />
        <Route exact path='/about' component={AboutPage} />
      </Switch>
    </ThemeProvider >
  );
}

export default App;