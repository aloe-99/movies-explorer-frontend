import { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { MainAPI } from '../../utils/MainApi';

function MoviesCardList(props) {
  const { movies, windowSize } = props;
  const [itemsToShow, setItemsToShow] = useState(0);

  useEffect(() => {
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

  function saveCard(card) {
    MainAPI.postMovie(card);
  }

  function delCard(card) {
    MainAPI.deleteMovie(card.id);
  }

  function renderMovieCard(movie) {
    return (
      <MoviesCard
        movie={movie}
        isSaved={false}
        onCardSave={saveCard}
        onCardDel={delCard}
      />
    )
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
      {itemsToShow < movies.length ? <button className='more-btn btn-dissolution' onClick={showMore}>Ещё</button> : ''}
    </>
  );
}

export default MoviesCardList;