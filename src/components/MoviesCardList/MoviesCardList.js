import { useEffect, useState, useContext } from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { MainAPI } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCardList(props) {
  const { movies, onCardDel, onSaveCard, windowSize, location } = props;
  const [itemsToShow, setItemsToShow] = useState(0);
  const [savedMovies, setSavedMovies] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    MainAPI.getMovies()
      .then((res) => {
        setSavedMovies(res);
      });
    if (location.pathname === '/saved-movies') {
      setItemsToShow(movies.length);
    }
    if (windowSize >= 1000) {
      setItemsToShow(12);
    }
    if (windowSize < 1000) {
      setItemsToShow(8);
    }
    if (windowSize < 600) {
      setItemsToShow(5);
    }
  }, [windowSize])

  function showMore() {
    if (windowSize >= 1000) {
      setItemsToShow(itemsToShow + 3);
    }
    if (windowSize < 1000) {
      setItemsToShow(itemsToShow + 2);
    }
  }

  function renderMovieCard(movie) {
    if (savedMovies.some(item => item.movieId === movie.id && currentUser._id === item.owner)) {
      return (
        <MoviesCard
          movie={movie}
          onCardSave={onSaveCard}
          onCardDel={onCardDel}
          location={location}
          isSaved={true}
        />
      )
    } else {
      return (
        <MoviesCard
          movie={movie}
          onCardSave={onSaveCard}
          onCardDel={onCardDel}
          location={location}
          isSaved={false}
        />
      )
    }
  }

  return (
    <>
      <ul className='section movies'>
        {
          movies.slice(0, itemsToShow).map((movie) => {
            return renderMovieCard(movie);
          })
        }
      </ul>
      {itemsToShow < movies.length && location.pathname === '/movies' ? <button className='more-btn btn-dissolution' onClick={showMore}>Ещё</button> : ''}
    </>
  );
}

export default MoviesCardList;