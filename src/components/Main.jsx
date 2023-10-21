import '../styles/layout/Main.scss';

export const Main = ({filteredScenes}) => {
  return (
    <>
      <ul>
      
      {filteredScenes.map(scene => (
        <li key={scene.id}>
          <article className='article' >
            <img
              src={scene.poster}
              alt='poster'
              className='article__poster'
            />
            <p className='article__movie'>{scene.movie}</p>
            <p className='article__year'>{scene.year}</p>
            <p className='article__quote'>{scene.frase}</p>
          </article>
        </li>
        ))}
      </ul>
    </>
  );
};
export default Main;
