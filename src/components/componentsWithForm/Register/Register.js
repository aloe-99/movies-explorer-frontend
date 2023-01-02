import '../form.css';
import { Link } from 'react-router-dom';
import logoPath from '../../../images/Header/logo.svg';

function Register(props) {
  return (
    <form className='form'>
      <fieldset className='form__preview'>
        <Link className='form__logo' to='/'>
          <img src={logoPath} alt='Логотип' />
        </Link>
        <h2 className='form__title form__title_profile'>Добро пожаловать!</h2>
      </fieldset>
      <fieldset className='form__inputs'>
        <label className='form__label' for='name'>Имя</label>
        <input className='form__input' type='text' id='name' />
        <label className='form__label' for='email'>E-mail</label>
        <input className='form__input' type='email' id='email' />
        <label className='form__label' for='password'>Пароль</label>
        <input className='form__input' type='password' name='password' id='password' />
      </fieldset>
      <fieldset className='form__buttons'>
        <button className='form__btn btn-dissolution' type='submit'>Зарегистрироваться</button>
        <span className='form__text'>
          Уже зарегистрированы?
          <Link className='form__link link-dissolution' to='/signin'>Войти</Link>
        </span>
      </fieldset>
    </form>
  );
}

export default Register;