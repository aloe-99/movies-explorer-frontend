import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter, useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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
import HeaderNav from '../HeaderNav/HeaderNav';
import { MainAPI } from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App(props) {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const location = useLocation();


  useEffect(() => {
    function fetchData() {
      MainAPI.getUserData()
        .then((res) => { setCurrentUser(res) })
        .catch((err) => alert(err));
    }
    if (loggedIn) {
      fetchData();
    }
  }, [loggedIn]);

  useEffect(() => {
    tokenCheck(location.pathname);
  }, []);

  const checkSize = () => {
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize);

    return () => {
      window.removeEventListener('resize', checkSize);
    }
  });

  function checkLocationHeader(component) {
    if (location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/profile' || location.pathname === '/saved-movies') {
      return component;
    }
  }

  function checkLocationFooter(component) {
    if (location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies') {
      return component;
    }
  }

  function handleRegister() {
    auth.register(email, password, userName)
      .then(() => {
        props.history.push('/signin');
      })
      .catch((err) => {
        console.log(err);
        document.querySelector('.form-error-response').textContent = err;
      })
  }

  function handleLogin() {
    if (!email || !password) {
      return;
    }
    auth.authorize(email, password)
      .then((res) => {
        if (res.token) {
          setEmail('');
          setPassword('');
          tokenCheck('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
        document.querySelector('.form-error-response').textContent = err;
      })
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    props.history.push('/');
    setLoggedIn(false);
    if (localStorage.getItem('initialMovies')) {
      localStorage.removeItem('initialMovies');
    }
  }

  function tokenCheck(path) {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        auth.getContent(jwt)
          .then((res) => {
            setCurrentUser(res);
            setLoggedIn(true);
            setEmail(res.email);
            props.history.push(path);
          })
          .catch((err) => console.log(err));
      }
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {checkLocationHeader(<Header location={location} windowSize={windowSize} loggedIn={loggedIn} />)}
      <Switch>
        <ProtectedRoute
          exact path="/movies"
          loggedIn={loggedIn}
          windowSize={windowSize}
          location={location.pathname}
          component={Movies}
        />
        <ProtectedRoute
          exact path="/saved-movies"
          loggedIn={loggedIn}
          location={location.pathname}
          component={SavedMovies}
        />
        <ProtectedRoute
          exact path="/profile"
          loggedIn={loggedIn}
          component={Profile}
          onLogout={handleLogout}
        />
        <Route exact path='/'>
          <Main
            loggedIn={loggedIn}
          />
        </Route>
        <Route path="/signin">
          <Login
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            onLogin={handleLogin}
          />
        </Route>
        <Route path="/signup">
          <Register
            userName={userName}
            email={email}
            password={password}
            setUserName={setUserName}
            setEmail={setEmail}
            setPassword={setPassword}
            onRegister={handleRegister}
          />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      {checkLocationFooter(<Footer />)}
      <HeaderNav location={location} />
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
