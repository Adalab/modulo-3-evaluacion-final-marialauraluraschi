import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router-dom';
import '../styles/App.scss';
import getApi from '../services/getApi';
import ls from '../services/ls';
import Header from './Header';
import Main from './Main';
import SceneDetail from './SceneDetail';

function App() {
  const [scenes, setScenes] = useState([]);
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
      <header className='header'>
        <Header
          handleChangeName={handleChangeName}
          handleChangeYear={handleChangeYear}
          searchName={searchName}
          searchYear={searchYear}
          years={years()}
        />
      </header>

      <main className='main'>
        <Routes>
          <Route
            path={'/'}
            element={
              <Main filteredScenes={filteredScenes} />
            }
          />
          <Route
            path={'/scene/:id'}
            element={<h1>Hola, mundo</h1>}
            // element={<SceneDetail oneScene={oneScene} />}
          />
        </Routes>
      </main>
    </>
  );
}
export default App;
