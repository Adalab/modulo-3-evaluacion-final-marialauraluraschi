const FilterForm = ({
  handleChangeName,
  handleChangeYear,
  searchName,
  searchYear,
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
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
    </>
  );
};
export default FilterForm;
