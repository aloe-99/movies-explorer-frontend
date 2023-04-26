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
          <span className="section__header section__header_profile">Тимофей</span>
          <span className="section__container-title section__container-title_profile">Фронтенд-разработчик, 23 года</span>
          <p className="section__text">
            Я родился и живу в Красногорске, обучаюсь на факультете бизнес-информатики МЭИ.
            Я люблю головоломки и настольные игры, читаю стихи, играю на гитаре.
            Начал увлекаться программированием после поступления в МГТУ им. Н.Э. Баумана в 2017 году,
            по причине этого поступил в другой ВУЗ, по профильному направлению.
            Нахожусь в активном поиске работы.
          </p>
          <a className="section__text section__profile-link" href='r.ru'>Github</a>
        </div>
        <img className="section__profile-photo" src={photoPath} alt='Фото профиля' />
      </div>
    </section>
  );
}

export default AboutMe;