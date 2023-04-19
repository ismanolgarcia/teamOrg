import './InputText.css';

const InputText = ({ title, placeholder, required, valor, updateValue }) => {
  const handleChange = (event) => {
    updateValue(event.target.value);
  };

  return (
    <div className="InputText">
      <label>{title}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={valor}
        required={required}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputText;
