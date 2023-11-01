import "./CostsFilter.css";

const CostsFilter = (props) => {

  const yearChangeHandler = (event) => {
    console.log(event.target);
    props.onChangeYear(event.target.value);
  };

  const renderOptionYear = (startYear) =>
  {
    let thisYear = new Date().getFullYear()
    const years = [];
    for (let year = startYear; year <= thisYear; year++) {
      years.push(<option key={year} value={year}>{year}</option>);
    }
    return years;
  }

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор По Году</label>
        <select value={props.year} onChange={yearChangeHandler}>
          <option key='' value=''>все расходы</option>
          { renderOptionYear(2021)}
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;