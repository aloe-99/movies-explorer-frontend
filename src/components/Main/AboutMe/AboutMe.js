import './AboutMe.css';
import photoPath from '../../../images/AboutMe/profile-photo.png';

function AboutMe(props) {
  return (
    <section className="section student" id='student'>
      <div className="section__hr">
        <h3 className="section__title">Студент</h3>
      </div>
      <div className='section__container section__container_profile'>
        <div className='section__profile-text'>
          <span className="section__header section__header_profile">Виталий</span>
          <span className="section__container-title section__container-title_profile">Фронтенд-разработчик, 30 лет</span>
          <p className="section__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ.
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="section__text section__profile-link" href='r.ru'>Github</a>
        </div>
        <img className="section__profile-photo" src={photoPath} alt='Фото профиля' />
      </div>
    </section>
  );
}

export default AboutMe;