import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__hr">
        <p className='footer__text footer__text_dark'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className='footer__container'>
        <span className='footer__text'>&#169; 2022</span>
        <a className='footer__link link-dissolution' target='_blank' rel="noopener noreferrer" href='https://practicum.yandex.ru'>Яндекс.Практикум</a>
        <a className='footer__link link-dissolution' target='_blank' rel="noopener noreferrer" href='https://github.com/aloe-99'>Github</a>
      </div>
    </footer>
  );
}

export default Footer;