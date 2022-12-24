import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  return (
    <>
      <SearchForm />
      <MoviesCardList isSaved={false} />
    </>
  );
}

export default Movies;