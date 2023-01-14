import { useContext, useEffect, useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { MainAPI } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedMovies(props) {
  const { location } = props;

  const [resultBlock, setResultBlock] = useState(null);
  const [renderState, setRenderState] = useState('');

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    function moviesRender() {
      MainAPI.getMovies()
        .then((res) => {
          if (res.length !== 0) {
            const moviesData = res.filter(item => item.owner === currentUser._id);
            localStorage.setItem('savedMovies', JSON.stringify(moviesData));
            if (moviesData.length !== 0) {
              setResultBlock(<MoviesCardList location={location} movies={moviesData} onCardDel={handleCardDel} />);
            } else {
              setResultBlock(<span className='section__text section__subtitle'>Перейдите во вкладку &#171;фильмы&#187;, чтобы добавить понравившиеся фильмы на эту страницу.</span>);
            }
          } else {
            setResultBlock(<span className='section__text section__subtitle'>Перейдите во вкладку &#171;фильмы&#187;, чтобы добавить понравившиеся фильмы на эту страницу.</span>);
          }
        });
    }
    moviesRender();
  }, [renderState]);

  function filterMovies(data, text, checkbox) {
    if (data.length === 0) {
      return setResultBlock(<span className='section__text section__subtitle'>Перейдите во вкладку &#171;фильмы&#187;, чтобы добавить понравившиеся фильмы на эту страницу.</span>);
    }
    const moviesData = data.filter((movie) => {
      return (movie.nameRU.toLowerCase().includes(text.toLowerCase()) || movie.nameEN.toLowerCase().includes(text.toLowerCase()));
    });

    if (checkbox === true) {
      const shortMoviesData = moviesData.filter((movie) => {
        return movie.duration < 40;
      })
      return shortMoviesData;
    } else {
      return moviesData;
    }
  }

  function handleCardDel(card) {
    MainAPI.deleteMovie(card.movieId)
      .then((res) => setRenderState(res.movieId));
  }

  function sortMovies(evt) {
    evt.preventDefault();
    const savedMoviesList = JSON.parse(localStorage.getItem('savedMovies'));
    const reqText = localStorage.getItem('reqText');
    const reqCheckbox = localStorage.getItem('reqCheckbox');
    const savedMoviesData = filterMovies(savedMoviesList, reqText, reqCheckbox);
    if (savedMoviesData.length !== 0) {
      setResultBlock(<MoviesCardList location={location} movies={savedMoviesData} onCardDel={handleCardDel} />);
    } else {
      setResultBlock(<span className='section__text section__subtitle'>Ничего не найдено</span>);
    }
  }

  return (
    <>
      <SearchForm onSubmit={sortMovies} />
      {resultBlock}
    </>
  );
}

export default SavedMovies;