import '../styles/layout/Main.scss';
import SceneList from './SceneList';
import ls from '../services/ls';

export const Main = ({ filteredScenes }) => {
  const searchName = ls.get('searchName', '');

  return (
    <>
      <ul className='main__ul' >
        {filteredScenes.length > 0 ? (
          <SceneList filteredScenes={filteredScenes}/>
        ) : (
          <p>No hay ninguna nombre de película que coincida con la palabra {searchName}.</p>
        )}
      </ul>
    </>
  );
};

export default Main;

