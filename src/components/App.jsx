import { useState, useEffect } from 'react';
import getApi from '../services/getApi';
import '../styles/App.scss';
import Header from './Header';
import Main from './Main';

function App() {
  const [scenes, setScenes] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchYear, setSearchYear] = useState('Todos');
  useEffect(() => {
    getApi().then((response) => {
      setScenes(response);
      console.log(scenes);
    });
  }, []);

  const handleChangeName = (event) => {
    setSearchName(event.target.value);
  };

  const handleChangeYear = (event) => {
    setSearchYear(event.target.value);
  };
  return (
    <>
      <header className='header'>
        <Header
          handleChangeName={handleChangeName}
          handleChangeYear={handleChangeYear}
          searchName={searchName}
          searchYear={searchYear}
        />
      </header>
      <main className='main'>
        <Main />
      </main>
    </>
  );
}
export default App;
