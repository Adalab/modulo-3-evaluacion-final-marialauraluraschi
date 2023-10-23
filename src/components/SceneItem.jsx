import '../styles/layout/SceneItem.scss';
const SceneItem = ({ scene }) => {
  return (
    <>
      <article className='article'>
        <img src={scene.poster} alt='poster' className='article__poster' />
        <p className='article__par'>
          <span className='article__par--movie'>{scene.movie}</span>
          <span> - </span>
          <span className='article__par--year'>{scene.year}</span>
        </p>
        <q className='article__quote'>{scene.frase}</q>
      </article>
    </>
  );
};

export default SceneItem;
