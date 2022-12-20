import './Techs.css';

function Techs(props) {
  return (
    <section className='section techs' id='techs'>
      <div className='section__hr'>
        <h3 className='section__title'>Технологии</h3>
      </div>
      <h2 className='section__header'>7 технологий</h2>
      <p className='section__text section__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className='section__cards-row'>
        <div className='section__card section__card_big'>
          <span className='section__text'>HTML</span>
        </div>
        <div className='section__card section__card_big'>
          <span className='section__text'>CSS</span>
        </div>
        <div className='section__card section__card_big'>
          <span className='section__text'>JS</span>
        </div>
        <div className='section__card section__card_big'>
          <span className='section__text'>React</span>
        </div>
        <div className='section__card section__card_big'>
          <span className='section__text'>Git</span>
        </div>
        <div className='section__card section__card_big'>
          <span className='section__text'>Express.js</span>
        </div>
        <div className='section__card section__card_big'>
          <span className='section__text'>mongoDB</span>
        </div>
      </div>
    </section>
  )
}

export default Techs;