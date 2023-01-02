import './Techs.css';

function Techs(props) {
  return (
    <section className='section techs' id='techs'>
      <div className='section__hr section__hr_techs'>
        <h3 className='section__title'>Технологии</h3>
      </div>
      <h2 className='section__header techs__header'>7 технологий</h2>
      <p className='section__text section__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='section__cards-row techs__cards-row'>
        <li className='section__card section__card_big'>
          <span className='section__text'>HTML</span>
        </li>
        <li className='section__card section__card_big'>
          <span className='section__text'>CSS</span>
        </li>
        <li className='section__card section__card_big'>
          <span className='section__text'>JS</span>
        </li>
        <li className='section__card section__card_big'>
          <span className='section__text'>React</span>
        </li>
        <li className='section__card section__card_big'>
          <span className='section__text'>Git</span>
        </li>
        <li className='section__card section__card_big'>
          <span className='section__text'>Express.js</span>
        </li>
        <li className='section__card section__card_big'>
          <span className='section__text'>mongoDB</span>
        </li>
      </ul>
    </section>
  )
}

export default Techs;