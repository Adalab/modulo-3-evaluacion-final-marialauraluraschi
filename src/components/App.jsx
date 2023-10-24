import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath, NavLink } from 'react-router-dom';
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
  const { pathname } = useLocation();
  const routData = matchPath('/scene/:id', pathname);
  console.log(routData);
  const sceneId = routData ? routData.params.id : '';
  console.log(sceneId);
  const oneScene = scenes.find((scene) => scene.id === sceneId);
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
            element={<Main filteredScenes={filteredScenes} />}
          />
          <Route
            path={'/scene/:id'}
            element={
              <>
                <SceneDetail oneScene={oneScene} />
                <NavLink to='/'>
                  <>
                    <i className='fa-solid fa-angles-left'> </i>
                    <small>Volver</small>
                  </>
                </NavLink>
              </>
            }
          />
          <Route path='*' element={<h1>La escena que buscas no existe</h1>} />
        </Routes>
      </main>
    </>
  );
}
export default App;
