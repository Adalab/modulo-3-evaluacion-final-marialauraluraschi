import { NavLink } from 'react-router-dom';
import '../styles/layout/SceneList.scss';
import SceneItem from './SceneItem';

const SceneList = ({ handleClick, filteredScenes }) => {
  const handleClickedScene = (ev) => {
    {
      handleClick(ev.currentTarget.id);
    }
  };
  const renderList = filteredScenes.map((scene) => (
    <NavLink to={`/scene/${scene.id}`} key={scene.id}>
      <li  onClick={handleClickedScene} className='main__ul--li'>
        <SceneItem scene={scene} />
      </li>
    </NavLink>
  ));
  return <>{renderList}</>;
};

export default SceneList;
