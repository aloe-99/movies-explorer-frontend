import './Profile.css';
import '../form.css';
import { Link } from 'react-router-dom';

function Profile(props) {
  return (
    <form className='form form_profile'>
      <fieldset className='form__preview form__preview_profile'>
        <h2 className='form__title form__title_profile form__title_position_center'>Привет, Виталий!</h2>
      </fieldset>
      <fieldset className='form__inputs'>
        <div className='form__group form__group_profile'>
          <label className='form__label form__label_profile' for='name'>Имя</label>
          <input className='form__input form__input_profile' type='text' id='name' />
        </div>
        <div className='form__group form__group_profile form__group_profile_underline-disable'>
          <label className='form__label form__label_profile' for='email'>E-mail</label>
          <input className='form__input form__input_profile form__input_profile_underline-disable' type='email' name='email' id='email' />
        </div>
      </fieldset>
      <fieldset className='form__buttons'>
        <button className='form__text form__text_color_light form__text-btn link-dissolution' type='submit'>Редактировать</button>
        <Link className='form__text form__text_color_red form__text-btn link-dissolution'>Выйти из аккаунта</Link>
      </fieldset>
    </form>
  );
}

export default Profile;