import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import getApi from '../services/getApi';
import ls from '../services/ls';
import '../styles/App.scss';
import Home from './Home';
import SceneDetail from './SceneDetail';

function App() {
  const [scenes, setScenes] = useState([]);
  const [oneScene, setOneScene] = useState('');
  const [searchName, setSearchName] = useState(ls.get('searchName', ''));
  const [searchYear, setSearchYear] = useState('Todos');

  useEffect(() => {
    getApi().then((cleanData) => {
      setScenes(cleanData);
    });
  }, []);

  useEffect(() => {
    ls.set('searchName', searchName);
  }, [searchName]);

  const handleChangeName = (value) => {
    setSearchName(value);
  };

  const handleChangeYear = (value) => {
    setSearchYear(value);
  };

  const handleClick = (id) => {
    setOneScene(id);
  };

  const filteredScenes = scenes.filter(
    (scene) =>
      (searchName === '' ||
        scene.movie.toLowerCase().includes(searchName.toLowerCase())) &&
      (searchYear === 'Todos' || scene.year.toString() === searchYear)
  );

  const years = () => {
    const uniqueYears = [...new Set(scenes.map((scene) => scene.year))];
    return uniqueYears.sort((a, b) => a - b);
  };

  return (
    <>
      <Routes>
        <Route
          path={`/`}
          element={
            <Home
              handleChangeName={handleChangeName}
              handleChangeYear={handleChangeYear}
              searchName={searchName}
              searchYear={searchYear}
              years={years()}
              handleClick={handleClick}
              filteredScenes={filteredScenes}
              scenes={scenes}
            />
          }
        />
        <Route
          path={`/scene/${oneScene.id}`}
          element={<SceneDetail oneScene={oneScene} />}
        />
      </Routes>
    </>
  );
}
export default App;
