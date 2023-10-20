import '../styles/layout/Header.scss';
import FilterForm from './FilterForm';
export const Header = ({
  handleChangeName,
  handleChangeYear,
  searchName,
  searchYear,
}) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <h1 className='header__title'>Owen Wilson s wow</h1>
      <form onSubmit={handleForm}>
        <FilterForm
          handleChangeName={handleChangeName}
          handleChangeYear={handleChangeYear}
          searchName={searchName}
          searchYear={searchYear}
        />
      </form>
    </>
  );
};
export default Header;
