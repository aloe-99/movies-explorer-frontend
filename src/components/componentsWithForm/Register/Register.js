import '../form.css';
import { Link, withRouter } from 'react-router-dom';
import logoPath from '../../../images/Header/logo.svg';

function Register(props) {
  const { userName, email, password, setUserName, setEmail, setPassword, onRegister } = props;

  function onChangeName(e) {
    setUserName(e.target.value);
  }

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister();
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <fieldset className='form__preview'>
        <Link className='form__logo' to='/'>
          <img src={logoPath} alt='Логотип' />
        </Link>
        <h2 className='form__title form__title_profile'>Добро пожаловать!</h2>
      </fieldset>
      <fieldset className='form__inputs'>
        <label className='form__label' htmlFor='name'>Имя</label>
        <input className='form__input' type='text' id='name' value={userName} onChange={onChangeName} />
        <label className='form__label' htmlFor='email'>E-mail</label>
        <input className='form__input' type='email' id='email' value={email} onChange={onChangeEmail} />
        <label className='form__label' htmlFor='password'>Пароль</label>
        <input className='form__input' type='password' name='password' id='password' value={password} onChange={onChangePassword} />
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

export default withRouter(Register);