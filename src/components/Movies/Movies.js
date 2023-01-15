import { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { moviesAPI } from '../../utils/MoviesApi';
import { MainAPI } from '../../utils/MainApi';

function Movies(props) {
  const { windowSize, location } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [resultBlock, setResultBlock] = useState(null);

  function filterMovies(data, text, checkbox) {
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


  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    moviesAPI.getInitialMovies()
      .then((res) => {
        const reqText = localStorage.getItem('reqText');
        const reqCheckbox = localStorage.getItem('reqCheckbox');
        const moviesData = filterMovies(res, reqText, reqCheckbox);
        if (moviesData.length !== 0) {
          localStorage.setItem('initialMovies', JSON.stringify(moviesData));
          setIsLoading(false);
          setResultBlock(<MoviesCardList movies={moviesData} location={location} windowSize={windowSize} onSaveCard={handleSaveCard} onCardDel={handleCardDel} />);
        } else {
          setIsLoading(false);
          setResultBlock(<span className='section__text section__subtitle'>Ничего не найдено</span>);
        }
      })
      .catch(() => {
        setIsLoading(false);
        setResultBlock(<span className='section__text section__subtitle'>
          Во время запроса произошла ошибка.
          Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз.
        </span>
        )
      });
  }

  useEffect(() => {
    function moviesRender() {
      if (resultBlock === null) {
        return '';
      }
      if (resultBlock.length === 0) {
        setResultBlock(<span className='section__text section__subtitle'>Ничего не найдено</span>);
        return resultBlock;
      }
      if (resultBlock !== null) {
        return resultBlock;
      }
    }

    moviesRender();
  }, [resultBlock, props.loggedIn]);

  useEffect(() => {
    const cachedMovies = JSON.parse(localStorage.getItem('initialMovies'));
    if (cachedMovies !== null) {
      setResultBlock(<MoviesCardList movies={cachedMovies} location={location} windowSize={windowSize} onSaveCard={handleSaveCard} onCardDel={handleCardDel} />);
    }
  }, []);

  function handleCardDel(card, likeBtn) {
    MainAPI.deleteMovie(card.id)
      .then(() => likeBtn.classList.remove('movies__like-btn_active'));
  }

  function handleSaveCard(card, likeBtn) {
    const { country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      id,
      nameRU,
      nameEN } = card;
    const cardData = {
      country,
      director,
      duration,
      year,
      description,
      image: `https://api.nomoreparties.co${image.url}`,
      trailerLink,
      thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
      movieId: id,
      nameRU,
      nameEN
    }
    MainAPI.postMovie(cardData)
      .then(() => likeBtn.classList.add('movies__like-btn_active'));
  }


  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {isLoading ? <Preloader /> : null}
      {resultBlock}
    </>
  );
}

export default Movies;