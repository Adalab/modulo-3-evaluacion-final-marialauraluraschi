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
  
  
  return (
    <>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <Main />
      </main>
    </>
  );
}
export default App;
