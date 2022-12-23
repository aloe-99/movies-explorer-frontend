import './Portfolio.css';
import arrowPath from '../../../images/Portfolio/arrow.svg';

function Portfolio(props) {
  return (
    <section className="section portfolio">
      <h3 className="section__title section__text_gray">Портфолио</h3>
      <ul className="section__portfolio-links">
        <li className='section__portfolio-link-box section__hr_dark btn-dissolution'>
          <a className='section__portfolio-link' target="_blank" rel="noopener noreferrer" href="https://github.com/aloe-99/how-to-learn">
            Статичный сайт
            <img src={arrowPath} alt='Иконка стрелочки' />
          </a>
        </li>
        <li className='section__portfolio-link-box section__hr_dark btn-dissolution'>
          <a className='section__portfolio-link' target="_blank" rel="noopener noreferrer" href="https://github.com/aloe-99/russian-travel">
            Адаптивный сайт
            <img src={arrowPath} alt='Иконка стрелочки' />
          </a>
        </li>
        <li className='section__portfolio-link-box section__hr_dark btn-dissolution'>
          <a className='section__portfolio-link' target="_blank" rel="noopener noreferrer" href="https://github.com/aloe-99/react-mesto-api-full">
            Одностраничное приложение
            <img src={arrowPath} alt='Иконка стрелочки' />
          </a>
        </li>
      </ul>
    </section >
  );
}

export default Portfolio;