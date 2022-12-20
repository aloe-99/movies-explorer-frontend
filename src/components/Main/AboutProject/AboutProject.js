import './AboutProject.css';

function AboutProject(props) {
  return (
    <section className='section about-project' id="about">
      <div className='section__hr'>
        <h3 className='section__title'>О проекте</h3>
      </div>
      <div className='section__container'>
        <h3 className='section__container-title'>Дипломный проект включал 5 этапов</h3>
        <h3 className='section__container-title'>На выполнение диплома ушло 5 недель</h3>
        <p className='section__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className='section__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className='section__grid-bar'>
        <span className='section__text section__text_bar-lime'>1 неделя</span>
        <span className='section__text section__text_bar-gray'>4 недели</span>
        <span className='section__text section__text_gray'>Back-end</span>
        <span className='section__text section__text_gray'>Front-end</span>
      </div>
    </section>
  );
}

export default AboutProject;