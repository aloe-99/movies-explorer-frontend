import { useState } from 'react';
import '../form.css';
import { Link, withRouter } from 'react-router-dom';
import logoPath from '../../../images/Header/logo.svg';
import { customValidator } from '../../../utils/CustomValidator';

function Login(props) {
  const { email, password, setEmail, setPassword, onLogin } = props;
  const [isValid, setIsValid] = useState(false);

  function onChangeEmail(e) {
    setEmail(e.target.value);
    const emailInput = document.getElementById('email');
    customValidator.checkInputValidity(emailInput);
    setIsValid(customValidator.checkFormValidity());
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
    const passwordInput = document.getElementById('password');
    customValidator.checkInputValidity(passwordInput);
    setIsValid(customValidator.checkFormValidity());
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin();
  }

  return (
    <form className='form' onSubmit={handleSubmit} noValidate>
      <fieldset className='form__preview'>
        <Link className='form__logo' to='/'>
          <img src={logoPath} alt='Логотип' />
        </Link>
        <h2 className='form__title'>Рады видеть!</h2>
      </fieldset>
      <fieldset className='form__inputs'>
        <label className='form__label' htmlFor='email'>E-mail</label>
        <input className='form__input' type='email' id='email' value={email} onChange={onChangeEmail} required />
        <span className='form__error-text form-error-email'></span>
        <label className='form__label' htmlFor='password'>Пароль</label>
        <input className='form__input' type='password' name='password' id='password' value={password} onChange={onChangePassword} required />
        <span className='form__error-text form-error-password'></span>
      </fieldset>
      <fieldset className='form__buttons'>
        <span className='form__error-text form-error-response'></span>
        <button className={`form__btn btn-dissolution ${isValid ? '' : 'form__btn_disabled'}`} type='submit' disabled={!isValid}>Войти</button>
        <span className='form__text'>
          Еще не зарегистрированы?
          <Link className='form__link link-dissolution' to='/signup'>Регистрация</Link>
        </span>
      </fieldset>
    </form>
  );
}

export default withRouter(Login);