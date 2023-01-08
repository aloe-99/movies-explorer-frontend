import { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { moviesAPI } from '../../utils/MoviesApi';

function Movies(props) {
  const { windowSize } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [moviesList, setMoviesList] = useState(null);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    moviesAPI.getInitialMovies()
      .then((res) => {
        localStorage.setItem('initialMovies', JSON.stringify(res));
        setIsLoading(false);
        setMoviesList(<MoviesCardList movies={res} windowSize={windowSize} />);
      })
      .catch(() => {
        setIsLoading(false);
        setMoviesList(<span className='section__text section__subtitle'>
          Во время запроса произошла ошибка.
          Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз.
        </span>
        )
      });
  }


  useEffect(() => {
    function moviesRender() {
      if (moviesList === null) {
        return '';
      }
      if (moviesList.length === 0) {
        setMoviesList(<span className='section__text section__subtitle'>Ничего не найдено</span>);
        return moviesList;
      }
      if (moviesList !== null) {
        return moviesList;
      }
    }

    moviesRender();
  }, [moviesList, props.loggedIn]);

  useEffect(() => {
    const cachedMovies = JSON.parse(localStorage.getItem('initialMovies'));
    if (cachedMovies !== null) {
      setMoviesList(<MoviesCardList movies={cachedMovies} windowSize={windowSize} />);
    }
  }, []);


  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {isLoading ? <Preloader /> : null}
      {moviesList}
    </>
  );
}

export default Movies;