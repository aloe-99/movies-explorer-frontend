import './MoviesCard.css';
import imagePath from '../../images/Movies/moviepic.png';

function MoviesCard(props) {
  return (
    <div className='movies__card'>
      <img className='movies__img' src={imagePath} alt='Кадр из фильма' />
      <div className='movies__group'>
        <span className='movies__title'>33 слова о дизайне</span>
        <button className='movies__like-btn' />
      </div>
      <span className='movies__duration'>1ч 47м</span>
    </div>
  );
}

export default MoviesCard;