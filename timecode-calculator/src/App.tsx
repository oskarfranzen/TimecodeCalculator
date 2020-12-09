import 'fontsource-roboto'
import './App.css';
import React, { } from 'react';
import { TimeCodeCalculatorPanel } from './components/TimeCodeCalculatorPanel';
import { AppBar, Button, Container, createMuiTheme, createStyles, Grid, Icon, makeStyles, Theme, ThemeProvider, Toolbar } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) => createStyles({
  header: {
    display: 'inline'
  }
}));


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0f0f0f'
    }
  }
})

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position='static'>
        <Toolbar>
          <Grid container justify='center'>
            <Grid item>
              <h2 className={classes.header}>TimeCodeR</h2>
              <span>{'\u2122'}</span>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <TimeCodeCalculatorPanel />
    </ThemeProvider>
  );
}

export default App;