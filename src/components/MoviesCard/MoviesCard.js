import './MoviesCard.css';

function MoviesCard(props) {
  const { movie, isSaved, onCardSave, onCardDel } = props;

  const handleSaveCard = (evt) => {
    evt.target.classList.toggle('movies__like-btn_active');
    onCardSave(movie);
  }

  const handleDelCard = () => {
    onCardDel(movie);
  }

  const checkSaved = () => {
    if (isSaved) {
      // return <button className='movies__close-btn btn-dissolution' onClick={handleDelCard} />;
      return <button className='movies__like-btn movies__like-btn_active btn-dissolution' onClick={handleDelCard} />;
    } else {
      return <button className='movies__like-btn btn-dissolution' onClick={handleSaveCard} />;
    }
  }

  return (
    <li className='movies__card' id={movie._id}>
      <img className='movies__img' src={`https://api.nomoreparties.co/${movie.image.url}`} alt='Кадр из фильма' />
      <div className='movies__group'>
        <span className='movies__title'>{movie.nameRU}</span>
        {checkSaved()}
      </div>
      <span className='movies__duration'>{`${Math.round(movie.duration / 60)}ч ${movie.duration % 60}м`}</span>
    </li>
  );
}

export default MoviesCard;