import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const showMore = () => {
    const movies = document.querySelector('.movies');
    const btn = document.querySelector('.movies__more-btn');

    movies.classList.add('show-more');
    btn.classList.add('hide-btn');
  }

  return (
    <>
      <section className='section movies'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </section>
      <button className='movies__more-btn btn-dissolution' onClick={showMore}>Ещё</button>
    </>
  );
}

export default MoviesCardList;