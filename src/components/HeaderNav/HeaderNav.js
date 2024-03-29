import './HeaderNav.css'
import { Link } from 'react-router-dom';
import closePath from '../../images/Header/close-Icon.svg';
import profileIcon from '../../images/Header/header__profile-icon.svg';

function HeaderNav(props) {
  const location = props.location;

  const closeMenu = () => {
    document.querySelector('.header-nav').classList.remove('header-nav_active');
  }

  function checkLocation(path) {
    return `header-nav__link link-dissolution ${location.pathname === path ? 'header-nav__link_active' : ''}`;
  }

  return (
    <div className='header-nav'>
      <div className='header-nav__container'>
        <button className='header-nav__close-btn btn-dissolution' onClick={closeMenu}>
          <img className='header-nav__close-icon' src={closePath} alt='Иконка закрытия' />
        </button>
        <Link className={checkLocation('/')} to='/' onClick={closeMenu}>Главная</Link>
        <Link className={checkLocation('/movies')} to='/movies' onClick={closeMenu}>Фильмы</Link>
        <Link className={checkLocation('/saved-movies')} to='/saved-movies' onClick={closeMenu}>Сохраненные фильмы</Link>
        <Link className='header-nav__link header-nav__link-btn btn-dissolution' to='/profile' onClick={closeMenu}>
          <span>Аккаунт</span>
          <img className='header-nav__profile-icon' src={profileIcon} alt='Иконка профиля' />
        </Link>
      </div>
    </div>
  )
}

export default HeaderNav;