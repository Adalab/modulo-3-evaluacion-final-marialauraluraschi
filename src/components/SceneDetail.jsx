import '../styles/layout/SceneDetail.scss';
const SceneDetail = ({ oneScene }) => {

  return (
    <>
      <article className='article'>
        <img src={oneScene.poster} alt='poster' className='article__poster' />
        <p className='article__movie'>{oneScene.movie}</p>
        <p className='article__year'>{oneScene.year}</p>
        <q className='article__quote'>{oneScene.frase}</q>
        <p className='article__director'>Director: {oneScene.director}</p>
        <a href={oneScene.audio} target='_blank' rel='noreferrer'>
          Escuchar audio
        </a>
      </article>
    </>
  );
};

export default SceneDetail;
