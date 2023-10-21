import { useState, useEffect } from 'react';
import getApi from '../services/getApi';
import '../styles/App.scss';
import Header from './Header';
import Main from './Main';

function App() {
  const [scenes, setScenes] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchYear, setSearchYear] = useState('Todos');
  const [years, setYears] = useState([]);
  useEffect(() => {
    getApi().then((response) => {
      setScenes(response);
      const yearsOnly = [...new Set(response.map(scene => scene.year))]; // Obtiene los años únicos
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
    const clickedId = event.target.id;
    console.log(clickedId)
  };
  

  const filteredScenes = scenes.filter(scene => 
    (searchName === '' || scene.movie.toLowerCase().includes(searchName.toLowerCase())) && 
    (searchYear === 'Todos' || scene.year.toString() === searchYear)
  );
  
  
  
  return (
    <>
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
        <Main filteredScenes={filteredScenes} handleClick={handleClick} />
      </main>
    </>
  );
}
export default App;
