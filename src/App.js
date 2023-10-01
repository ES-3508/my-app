
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './component/Card';
import Dashboard from './pages/Dashboard';
import Threed from './pages/Threed';
import Ground from './pages/Ground';
import First from './pages/First';
import Navbar from './component/Navbar';
import Room from './component/Room';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path='/area/:id'>
            <Room/>
          </Route>
          <Route path="/Panormic view">
            <Threed/>
          </Route>
          <Route path="/Ground floor">
            <Ground/>
          </Route>
          <Route path="/First floor">
            <First/>
          </Route>
        </Switch>
      </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;

