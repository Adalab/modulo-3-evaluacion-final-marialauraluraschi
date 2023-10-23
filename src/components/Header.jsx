import '../styles/layout/Header.scss';
import FilterForm from './FilterForm';
export const Header = ({
  handleChangeName,
  handleChangeYear,
  searchName,
  searchYear,
  years,
}) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <h1 className='header__title'>
        Owen Wilson s <q>wow</q>{' '}
      </h1>
      <form onSubmit={handleForm} className='header__form'>
        <FilterForm
          handleChangeName={handleChangeName}
          handleChangeYear={handleChangeYear}
          searchName={searchName}
          searchYear={searchYear}
          years={years}
        />
      </form>
    </>
  );
};
export default Header;
