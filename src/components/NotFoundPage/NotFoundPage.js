import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <div className='notfound'>
      <div className='notfound__container'>
        <span className='notfound__title'>404</span>
        <span className='notfound__subtitle'>Страница не найдена</span>
        <a className='notfound__link' href='r.ru'>Назад</a>
      </div>
    </div>
  );
}

export default NotFoundPage;