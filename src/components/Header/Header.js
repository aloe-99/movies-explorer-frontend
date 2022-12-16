import './Header.css';
import { Link } from 'react-router-dom';
import logoPath from '../../images/Header/logo.svg';
import profileIcon from '../../images/Header/header__profile-icon.svg';

function Header(props) {
  return (
    <header className='header'>
      <img className='header__logo' src={logoPath} alt='Логотип' />
      <Link className='header__link' to='/movies'>Фильмы</Link>
      <Link className='header__link' to='/saved-movies'>Сохраненные фильмы</Link>
      <Link className='header__link header__link-btn' to='/profile'>
        <span>Аккаунт</span>
        <img className='header__profile-icon' src={profileIcon} alt='Иконка профиля' />
      </Link>
    </header>
  );
}

export default Header;