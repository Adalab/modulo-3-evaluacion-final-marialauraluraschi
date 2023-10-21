import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getApi from '../services/getApi';

const SceneDetail = () => {
  const { id } = useParams();
  const [scene, setScene] = useState(null);

  useEffect(() => {
    getApi().then((scenes) => {
      const foundScene = scenes.find((scene) => scene.id === id);
      setScene(foundScene);
    });
  }, [id]);

  return scene ? (
    <>
      <article className='article'>
        <img src={scene.poster} alt='poster' className='article__poster' />
        <p className='article__movie'>{scene.movie}</p>
        <p className='article__year'>{scene.year}</p>
        <p className='article__quote'>{scene.frase}</p>
        <p className='article__director'>{scene.director}</p>
        <a href={scene.audio} target='_blank' rel='noreferrer'>Escuchar audio de la escena</a>
      </article>
    </>
  ) : (
    <p>Cargando...</p>
  );
};

export default SceneDetail;
