import './MoviesCard.css';
import imagePath from '../../images/Movies/moviepic.png';

function MoviesCard(props) {
  const { isSaved } = props

  const checkSaved = () => {
    if (isSaved) {
      return <button className='movies__close-btn btn-dissolution' />;
    } else {
      return <button className='movies__like-btn btn-dissolution' />;
    }
  }

  return (
    <li className='movies__card'>
      <img className='movies__img' src={imagePath} alt='Кадр из фильма' />
      <div className='movies__group'>
        <span className='movies__title'>33 слова о дизайне</span>
        {checkSaved()}
      </div>
      <span className='movies__duration'>1ч 47м</span>
    </li>
  );
}

export default MoviesCard;