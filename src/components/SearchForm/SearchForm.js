import './SearchForm.css';

function SearchForm(props) {
  const { onSubmit } = props;

  const saveReq = () => {
    const reqText = document.getElementById('movie-title');
    const reqCheckbox = document.getElementById('checkbox');

    localStorage.setItem('reqText', reqText.value);
    localStorage.setItem('reqCheckbox', reqCheckbox.checked);
  }

  return (
    <form className='search-form' onSubmit={onSubmit}>
      <fieldset className='search-form__group'>
        <input className='search-form__input' type='text' placeholder='Фильм' id='movie-title' required />
        <button className='search-form__button btn-dissolution' type='submit' onClick={saveReq}>Найти</button>
      </fieldset>
      <label className='search-form__label btn-dissolution'>
        <input className='search-form__checkbox' type='checkbox' id='checkbox' />
        <span className='search-form__checkbox search-form__checkbox_visible'></span>
        Короткометражка
      </label>
    </form>
  );
}

export default SearchForm;