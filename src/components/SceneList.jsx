import { NavLink } from 'react-router-dom';
import '../styles/layout/SceneList.scss';
import SceneItem from './SceneItem';

const SceneList = ({ filteredScenes, handleClick }) => {
  const handleClickedScene = (event) => {
    const clickedId = event.currentTarget.id;
    const clickedScene = filteredScenes.find((scene) => scene.id === clickedId);
    console.log(clickedScene);

    {
      handleClick(clickedScene);
    }
  };

  return (
    <>
      {filteredScenes.map((scene) => (
        <li key={scene.id} id={scene.id} onClick={handleClickedScene}>
          <NavLink
            to={`/scene/${scene.id}`}
            className='link'
            id={`${scene.id}`}
            target='_blank'
          >
            <SceneItem scene={scene} />
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default SceneList;
