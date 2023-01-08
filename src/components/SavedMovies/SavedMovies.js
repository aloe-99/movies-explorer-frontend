import { useEffect, useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { MainAPI } from '../../utils/MainApi';

function SavedMovies(props) {
  const { windowSize } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [moviesList, setMoviesList] = useState(null);

  useEffect(() => {
    function moviesRender() {
      MainAPI.getMovies()
        .then(res => console.log(res));
    }
    moviesRender();
  });

  return (
    <>
      <SearchForm />
      {isLoading ? <Preloader /> : null}
      {moviesList}
    </>
  );
}

export default SavedMovies;