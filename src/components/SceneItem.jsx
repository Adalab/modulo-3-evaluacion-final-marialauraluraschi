const SceneItem = ({ scene }) => {
  return (
    <>
      <article className='article'>
        <img src={scene.poster} alt='poster' className='article__poster' />
        <p className='article__movie'>{scene.movie}</p>
        <p className='article__year'>{scene.year}</p>
        <p className='article__quote'>{scene.frase}</p>
      </article>
    </>
  );
};

export default SceneItem;
