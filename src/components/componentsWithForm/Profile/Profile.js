import './Profile.css';
import '../form.css';
import { Link } from 'react-router-dom';

function Profile(props) {
  return (
    <form className='form form_profile'>
      <h2 className='form__title form__title_position_center'>Привет, Виталий!</h2>
      <label className='form__label' for='name'>Имя</label>
      <input className='form__input' type='text' id='name' />
      <label className='form__label' for='email'>E-mail</label>
      <input className='form__input form__input_underline_disable' type='email' name='email' id='email' />
      <button className='form__text_color_light form__text-btn' type='submit'>Редактировать</button>
      <Link className='form__text_color_red form__text-btn'>Выйти из аккаунта</Link>
    </form>
  );
}

export default Profile;