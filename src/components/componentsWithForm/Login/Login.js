import '../form.css';
import { Link } from 'react-router-dom';
import logoPath from '../../../images/Header/logo.svg';

function Login(props) {
  return (
    <form className='form'>
      <img className='form__logo' src={logoPath} alt='Логотип' />
      <h2 className='form__title'>Рады видеть!</h2>
      <label className='form__label' for='email'>E-mail</label>
      <input className='form__input' type='email' id='email' />
      <label className='form__label' for='password'>Пароль</label>
      <input className='form__input' type='password' name='password' id='password' />
      <button className='form__btn' type='submit'>Войти</button>
      <span className='form__text'>
        Еще не зарегестрированы?
        <Link className='form__link' to='/signup'>Регистрация</Link>
      </span>
    </form>
  );
}

export default Login;