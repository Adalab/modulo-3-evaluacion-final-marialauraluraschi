import '../styles/layout/Main.scss';

export const Main = () => {
  return (
    <>
      <ul></ul>

      <li>
        <article className='article'>
          <img
            src='#'
            alt='poster'
            className='article__poster'
            placeholder='https://loremflickr.com/320/240/cinema'
          />
          <p className='article__movie'>movie</p>
          <p className='article__year'>year</p>
          <p className='article__quote'>frase</p>
        </article>
      </li>
    </>
  );
};
