import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const isSaved = props.isSaved;

  const showMore = () => {
    const movies = document.querySelector('.movies');
    const btn = document.querySelector('.movies__more-btn');

    movies.classList.add('show-more');
    btn.classList.add('hide-btn');
  }

  return (
    <>
      <ul className='section movies'>
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
      </ul>
      <button className='more-btn btn-dissolution' onClick={showMore}>Ещё</button>
    </>
  );
}

export default MoviesCardList;