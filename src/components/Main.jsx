import '../styles/layout/Main.scss';
import SceneList from './SceneList';


export const Main = ({filteredScenes, handleClick}) => {
  return (
    <>
      <ul>
      <SceneList filteredScenes={filteredScenes} handleClick={handleClick}/>

      </ul>
    </>
  );
};
export default Main;
