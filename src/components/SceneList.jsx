import '../styles/layout/SceneList.scss';
import SceneItem from './SceneItem';

const SceneList = ({ handleClick, filteredScenes }) => {
  const handleClickedScene = (ev) => {
    {
      handleClick(ev.currentTarget.id);
    }
  };
  const renderList = filteredScenes.map((scene) => (
    <li key={scene.id} onClick={handleClickedScene} className='main__ul--li'>
      <SceneItem scene={scene} />
    </li>
  ));
  return <>{renderList}</>;
};

export default SceneList;
