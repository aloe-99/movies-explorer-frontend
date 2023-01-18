import './SearchForm.css';
import '../componentsWithForm/form.css';

function SearchForm(props) {
  const { onSubmit, location, setSavedReqText, setSavedReqCheckbox } = props;
  const searchInput = document.querySelector('.search-form__input');
  const reqText = document.getElementById('movie-title');
  const reqCheckbox = document.getElementById('checkbox');
  const errorField = document.querySelector('.form-error-search');


  const saveReq = () => {
    if (searchInput.validity.valid) {
      errorField.textContent = '';
      localStorage.setItem('reqText', reqText.value);
      localStorage.setItem('reqCheckbox', reqCheckbox.checked);
    } else {
      errorField.textContent = 'Нужно ввести ключевое слово';
    }
  }

  const handleSaveMoviesSubmit = () => {
    if (searchInput.validity.valid) {
      errorField.textContent = '';
      setSavedReqText(reqText.value);
      setSavedReqCheckbox(reqCheckbox.checked);
    } else {
      errorField.textContent = 'Нужно ввести ключевое слово';
    }
  }

  return (
    <form className='search-form' onSubmit={onSubmit} noValidate >
      <fieldset className='search-form__group'>
        <input
          className='search-form__input'
          type='text' placeholder='Фильм'
          id='movie-title'
          required
          defaultValue={localStorage.getItem('reqText') && location === '/movies' ? localStorage.getItem('reqText') : ''}
        />
        <button className='search-form__button btn-dissolution' type='submit' onClick={location === '/movies' ? saveReq : handleSaveMoviesSubmit}>Найти</button>
      </fieldset>
      <span className='form__error-text form-error-search'></span>
      <label className='search-form__label btn-dissolution'>
        <input
          className='search-form__checkbox'
          type='checkbox'
          id='checkbox'
          defaultChecked={(localStorage.getItem('reqCheckbox') === 'true' && location) === '/movies' ? localStorage.getItem('reqCheckbox') : false}
        />
        <span className='search-form__checkbox search-form__checkbox_visible'></span>
        Короткометражка
      </label>
    </form>
  );
}

export default SearchForm;