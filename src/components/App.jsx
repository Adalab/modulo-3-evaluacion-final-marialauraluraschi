import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import getApi from '../services/getApi';
import '../styles/App.scss';
import Header from './Header';
import Main from './Main';
import SceneDetail from './SceneDetail';

function App() {
  const [scenes, setScenes] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchYear, setSearchYear] = useState('Todos');
  const [years, setYears] = useState([]);
  useEffect(() => {
    getApi().then((response) => {
      setScenes(response);
      const yearsOnly = [...new Set(response.map((scene) => scene.year))]; // Obtiene los años únicos
      yearsOnly.sort((a, b) => a - b); // Ordena los años
      setYears(yearsOnly);
    });
  }, []);

  const handleChangeName = (event) => {
    setSearchName(event.target.value);
  };

  const handleChangeYear = (event) => {
    setSearchYear(event.target.value);
  };

  const handleClick = (event) => {
    const clickedId = event.currentTarget.id;
    console.log(clickedId);
    const url = `${window.location.origin}/scene/${clickedId}`;
    window.open(url, '_blank');
  };
  

  const filteredScenes = scenes.filter(
    (scene) =>
      (searchName === '' ||
        scene.movie.toLowerCase().includes(searchName.toLowerCase())) &&
      (searchYear === 'Todos' || scene.year.toString() === searchYear)
  );

  return (
    <>
      <Router>
        <header className='header'>
          <Header
            handleChangeName={handleChangeName}
            handleChangeYear={handleChangeYear}
            searchName={searchName}
            searchYear={searchYear}
            years={years}
          />
        </header>

        <main className='main'>
          <Routes>
            <Route
              path='/'
              element={
                <Main
                  filteredScenes={filteredScenes}
                  handleClick={handleClick}
                />
              }
            />
            <Route path='/scene/:id' element={<SceneDetail />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}
export default App;
