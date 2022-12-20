import '../form.css';
import { Link } from 'react-router-dom';
import logoPath from '../../../images/Header/logo.svg';

function Register(props) {
  return (
    <form className='form'>
      <Link className='form__logo' to='/'>
        <img src={logoPath} alt='Логотип' />
      </Link>
      <h2 className='form__title'>Добро пожаловать!</h2>
      <label className='form__label' for='name'>Имя</label>
      <input className='form__input' type='text' id='name' />
      <label className='form__label' for='email'>E-mail</label>
      <input className='form__input' type='email' id='email' />
      <label className='form__label' for='password'>Пароль</label>
      <input className='form__input' type='password' name='password' id='password' />
      <button className='form__btn' type='submit'>Зарегистрироваться</button>
      <span className='form__text'>
        Уже зарегестрированы?
        <Link className='form__link' to='/signin'>Войти</Link>
      </span>
    </form>
  );
}

export default Register;