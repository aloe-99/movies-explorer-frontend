import { useState } from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
  const { movie, isSaved, onCardSave, onCardDel, location } = props;

  function handleClickLikeBtn(evt) {
    if (evt.target.classList.contains('movies__like-btn_active')) {
      onCardDel(movie, evt.target);
    } else {
      onCardSave(movie, evt.target);
    }
  }

  function handleClickDelBtn() {
    onCardDel(movie);
  }

  function checkSaved() {
    if (location.pathname === '/saved-movies') {
      return <button className='movies__close-btn btn-dissolution' onClick={handleClickDelBtn} />;
    }
    if (isSaved) {
      return <button className='movies__like-btn movies__like-btn_active btn-dissolution' onClick={handleClickLikeBtn} />;
    } else {
      return <button className='movies__like-btn btn-dissolution' onClick={handleClickLikeBtn} />;
    }
  }

  return (
    <li className='movies__card' key={movie._id}>
      <img className='movies__img' src={movie.image.url ? `https://api.nomoreparties.co/${movie.image.url}` : `${movie.image}`} alt='Кадр из фильма' />
      <div className='movies__group'>
        <span className='movies__title'>{movie.nameRU}</span>
        {checkSaved()}
      </div>
      <span className='movies__duration'>{`${Math.round(movie.duration / 60)}ч ${movie.duration % 60}м`}</span>
    </li>
  );
}

export default MoviesCard;