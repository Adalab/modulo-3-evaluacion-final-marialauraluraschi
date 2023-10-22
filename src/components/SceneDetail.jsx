import '../styles/layout/SceneDetail.scss';
const SceneDetail = ({ oneScene }) => {
  return (
    <>
      <article className='article'>
        <img src={oneScene.poster} alt='poster' className='article__poster' />
        <p className='article__movie'>{oneScene.movie}</p>
        <p className='article__year'>{oneScene.year}</p>
        <p className='article__quote'>{oneScene.frase}</p>
        <p className='article__director'>{oneScene.director}</p>
        <a href={oneScene.audio} target='_blank' rel='noreferrer'>
          Escuchar audio de la escena
        </a>
      </article>
    </>
  );
};

export default SceneDetail;
