import '../styles/App.scss';
import Header from './Header';
import Main from './Main';

function App() {
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
