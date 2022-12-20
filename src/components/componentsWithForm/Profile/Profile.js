import './Profile.css';
import '../form.css';
import { Link } from 'react-router-dom';

function Profile(props) {
  return (
    <form className='form form_profile'>
      <h2 className='form__title form__title_position_center'>Привет, Виталий!</h2>
      <div className='form__group_profile'>
        <label className='form__label form__label_profile' for='name'>Имя</label>
        <input className='form__input form__input_profile' type='text' id='name' />
      </div>
      <div className='form__group_profile form__input_profile_underline-disable'>
        <label className='form__label form__label_profile' for='email'>E-mail</label>
        <input className='form__input form__input_profile form__input_underline_disable' type='email' name='email' id='email' />
      </div>
      <button className='form__text_color_light form__text-btn' type='submit'>Редактировать</button>
      <Link className='form__text_color_red form__text-btn'>Выйти из аккаунта</Link>
    </form>
  );
}

export default Profile;