import InputText from '../input/InputText';
import OptionList from '../optionList/OptionList';
import Button from '../button/Button';
import './Form.css';
import { useState } from 'react';

const Form = ({ teams, registerCollaborator }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [photo, setPhoto] = useState('');
  const [team, setTeam] = useState('');

  const handleEvent = (event) => {
    event.preventDefault();
    let dataSend = {
      name,
      position,
      photo,
      team,
    };
    registerCollaborator(dataSend);
  };

  return (
    <section className="form">
      <form onSubmit={handleEvent}>
        <h2>Rellena el formulario para crear el collaborator.</h2>
        <InputText
          title="Nombre"
          placeholder="Ingresar name"
          valor={name}
          updateValue={setName}
          required
        />
        <InputText
          title="Puesto"
          placeholder="Ingresar position"
          valor={position}
          updateValue={setPosition}
          required
        />
        <InputText
          title="Foto"
          placeholder="Ingresar enlace de photo"
          valor={photo}
          updateValue={setPhoto}
          required
        />
        <OptionList valor={team} updateValue={setTeam} teams={teams} />
        <Button title="Crear" />
      </form>
    </section>
  );
};

export default Form;
