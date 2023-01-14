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

  function handleCardDel(card) {
    MainAPI.deleteMovie(card.movieId)
      .then((res) => setRenderState(res.movieId));
  }

  function sortMovies(evt) {
    evt.preventDefault();
  }

  return (
    <>
      <SearchForm onSubmit={sortMovies} />
      {resultBlock}
    </>
  );
}

export default SavedMovies;