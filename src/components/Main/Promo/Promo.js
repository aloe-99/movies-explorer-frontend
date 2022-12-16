import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo(props) {
  return (
    <section className='section promo'>
      <h1 className='section__header'>Учебный проект студента факультета Веб-разработки.</h1>
      <NavTab />
    </section>
  );
}

export default Promo;