import './SearchForm.css';

function SearchForm(props) {
  return (
    <form className='search-form'>
      <fieldset className='search-form__group'>
        <input className='search-form__input' type='text' placeholder='Фильм' required />
        <button className='search-form__button btn-dissolution' type='submit'>Найти</button>
      </fieldset>
      <label className='search-form__label btn-dissolution'>
        <input className='search-form__checkbox' type='checkbox' />
        <span className='search-form__checkbox search-form__checkbox_visible'></span>
        Короткометражка
      </label>
    </form>
  );
}

export default SearchForm;