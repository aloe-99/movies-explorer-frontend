import './Techs.css';

function Techs(props) {
  return (
    <section className='section'>
      <div className='section__hr'>
        <h3 className='section__title'>Технологии</h3>
      </div>
      <h2 className='section__header'>7 технологий</h2>
      <p className='section__text section__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className='section__cards-row'>
        <div className='section__card section__card_big'>
          <a href='r.ru' className='section__text'>HTML</a>
        </div>
        <div className='section__card section__card_big'>
          <a href='r.ru' className='section__text'>CSS</a>
        </div>
        <div className='section__card section__card_big'>
          <a href='r.ru' className='section__text'>JS</a>
        </div>
        <div className='section__card section__card_big'>
          <a href='r.ru' className='section__text'>React</a>
        </div>
        <div className='section__card section__card_big'>
          <a href='r.ru' className='section__text'>Git</a>
        </div>
        <div className='section__card section__card_big'>
          <a href='r.ru' className='section__text'>Express.js</a>
        </div>
        <div className='section__card section__card_big'>
          <a href='r.ru' className='section__text'>mongoDB</a>
        </div>
      </div>
    </section>
  )
}

export default Techs;