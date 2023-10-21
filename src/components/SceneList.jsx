import SceneItem from './SceneItem';

const SceneList = ({ filteredScenes, handleClick }) => {
  return (
    <>
      {filteredScenes.map((scene) => (
        <li key={scene.id} id={scene.id} onClick={handleClick}>
          <SceneItem scene={scene} />
        </li>
      ))}
    </>
  );
};

export default SceneList;
