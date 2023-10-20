import '../styles/layout/Main.scss';

export const Main = () => {
  return (
    <>
      <ul>
        <li>
          <article className='article'>
            <img
              src='#'
              alt='poster'
              className='article__poster'
              placeholder='https://loremflickr.com/320/240/popcorn'
            />
            <p className='article__movie'>movie</p>
            <p className='article__year'>year</p>
            <p className='article__quote'>frase</p>
          </article>
        </li>
      </ul>
    </>
  );
};
export default Main;