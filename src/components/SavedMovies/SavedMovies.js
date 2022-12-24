import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <>
      <SearchForm />
      <MoviesCardList isSaved={true} />
    </>
  );
}

export default SavedMovies;