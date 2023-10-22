import '../styles/layout/FilterForm.scss';
const FilterForm = ({
  handleChangeName,
  handleChangeYear,
  searchName,
  searchYear,
  years,
}) => {
  return (
    <>
      <label>
        Movie
        <input type='text' onChange={handleChangeName} value={searchName} />
      </label>
      <label>
        Year
        <select
          name='year'
          id='year'
          onChange={handleChangeYear}
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
