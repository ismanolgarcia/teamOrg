import { Label } from '../../StyledComponents/Label';
import Select from '../../StyledComponents/Select';
const OptionList = ({ valor, updateValue, teams }) => {
  const handleChange = (e) => {
    updateValue(e.target.value);
  };
  return (
    <div className="optionList">
      <Label>Equipos</Label>
      <Select value={valor} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {teams.map((team, index) => (
          <option key={index} value={team}>
            {team}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default OptionList;
