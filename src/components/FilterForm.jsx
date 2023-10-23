import '../styles/layout/FilterForm.scss';
const FilterForm = ({
  handleChangeName,
  handleChangeYear,
  searchName,
  searchYear,
  years,
}) => {
  const handleName = (ev) => {
    handleChangeName(ev.target.value);
  };
  const handleYear = (ev) => {
    handleChangeYear(ev.target.value);
  };
  return (
    <>
      <label className='header__form--movie'>
        Movie
        <input type='text' onChange={handleName} value={searchName} />
      </label>
      <label className='header__form--year'>
        Year
        <select
          name='year'
          id='year'
          onChange={handleYear}
          value={searchYear}
        >
          <option value='Todos'>Todos</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};
export default FilterForm;
