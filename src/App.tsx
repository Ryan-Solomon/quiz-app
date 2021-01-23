import React from 'react';
import './App.css';
import QuizScreen from './screens/QuizScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomeScreen />
        </Route>
        <Route exact path='/quiz'>
          <QuizScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
