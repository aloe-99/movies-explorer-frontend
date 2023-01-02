import './Header.css';
import { Link } from 'react-router-dom';
import logoPath from '../../images/Header/logo.svg';
import profileIcon from '../../images/Header/header__profile-icon.svg';
import navIconPath from '../../images/Header/nav-logo.svg';

function Header(props) {
  const location = props.location.pathname;

  const showMenu = () => {
    document.querySelector('.header-nav').classList.add('header-nav_active');
  }

  function activateNavLink(path) {
    return `header__link link-dissolution ${location === path ? 'header__link_active' : ''}`;
  }

  function stylingHeader() {
    if (location === '/') {
      return (
        <div className='header__auth'>
          <Link className='header__link header__auth-link btn-dissolution' to='/signup'>Регистрация</Link>
          <Link className='header__link header__auth-link header__auth-btn btn-dissolution' to='/signin'>Войти</Link>
        </div>
      );
    }
    if (window.innerWidth < 800) {
      return (
        <>
          <button className='header__nav-btn' onClick={showMenu}>
            <img src={navIconPath} alt='Иконка навигации' />
          </button>
        </>
      );
    }
    return (
      <>
        <Link className={activateNavLink('/movies')} to='/movies'>Фильмы</Link>
        <Link className={activateNavLink('/saved-movies')} to='/saved-movies'>Сохраненные фильмы</Link>
        <Link className='header__link header__link-btn btn-dissolution' to='/profile'>
          <span>Аккаунт</span>
          <img className='header__profile-icon' src={profileIcon} alt='Иконка профиля' />
        </Link>
      </>
    );
  }

  return (
    <header className='header'>
      <Link to='/'><img className='header__logo' src={logoPath} alt='Логотип' /></Link>
      {stylingHeader()}
    </header>
  );
}

export default Header;