import { NavLink } from 'react-router-dom';
import '../styles/layout/SceneList.scss';
import SceneItem from './SceneItem';

const SceneList = ({ filteredScenes }) => {
  const renderList = filteredScenes.map((scene) => (
    <NavLink to={`/scene/${scene.id}`} key={scene.id}>
      <li className='main__ul--li'>
        <SceneItem scene={scene} />
      </li>
    </NavLink>
  ));
  return <>{renderList}</>;
};

export default SceneList;
