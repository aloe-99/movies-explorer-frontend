import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AboutProject from '../Main/AboutProject/AboutProject';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <AboutProject />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/saved-movies">
        <SavedMovies />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
}

export default App;
