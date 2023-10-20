import '../styles/layout/Header.scss';
export const Header = () => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <h1 className='header__title'>Owen Wilson s wow</h1>
      <form onSubmit={handleForm}>
        <label>Movie
          <input type='text' />
        </label>
        <label>Year
          <input type='number' />
        </label>
      </form>
    </>
  );
};
export default Header;