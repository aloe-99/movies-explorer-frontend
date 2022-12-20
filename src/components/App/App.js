import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Login from '../componentsWithForm/Login/Login';
import Register from '../componentsWithForm/Register/Register';
import Movies from '../Movies/Movies';
import Profile from '../componentsWithForm/Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  const location = useLocation();

  function checkLocationHeader(component) {
    if (location.pathname !== '/signin' || location.pathname !== '/signup') {
      return component;
    }
  }

  function checkLocationFooter(component) {
    if (location.pathname === '/' || location.pathname === '/movies') {
      return component;
    }
  }

  return (
    <>
      {checkLocationHeader(<Header location={location} />)}
      <Switch>
        <Route exact path="/">
          <Main />
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
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      {checkLocationFooter(<Footer />)}
    </>
  );
}

export default App;
