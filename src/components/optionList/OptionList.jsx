import './OptionList.css';
const OptionList = ({ valor, updateValue, teams }) => {
  const handleChange = (e) => {
    updateValue(e.target.value);
  };
  return (
    <div className="optionList">
      <label>Equipos</label>
      <select value={valor} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {teams.map((team, index) => (
          <option key={index} value={team}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionList;
