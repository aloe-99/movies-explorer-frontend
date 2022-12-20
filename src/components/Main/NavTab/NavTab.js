function NavTab(props) {
  return (
    <nav className='section__cards-row'>
      <a href='#about' className='section__text section__card'>О проекте</a>
      <a href='#techs' className='section__text section__card'>Технологии</a>
      <a href='#student' className='section__text section__card'>Студент</a>
    </nav>
  );
}

export default NavTab;