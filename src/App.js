import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/categories" component={CategoryPage} />
        <Route exact path="/search" component={SearchPage} />
        <Redirect exact to="/" />
      </Switch>
    </>
  );
}

export default App;
