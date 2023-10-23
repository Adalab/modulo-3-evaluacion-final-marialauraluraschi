import '../styles/layout/Main.scss';
import SceneList from './SceneList';

export const Main = ({ filteredScenes, handleClick }) => {
  return (
    <>
      <ul className='main__ul' >
        <SceneList filteredScenes={filteredScenes} handleClick={handleClick}/>
      </ul>
    </>
  );
};
export default Main;
