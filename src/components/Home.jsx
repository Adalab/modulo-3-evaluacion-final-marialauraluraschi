import Header from './Header';
import Main from './Main';

const Home = ({
  handleChangeName,
  handleChangeYear,
  searchName,
  searchYear,
  years,
  filteredScenes,
  handleClick,
}) => {
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
};

export default Home;
