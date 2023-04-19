import './CardPeople.css';
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
const CardPeople = ({ datos, highlight, deleteCollaborator, like }) => {
  const { name, position, photo, team, id, fav } = datos;
  return (
    <div className="collaborator">
      <AiFillCloseCircle
        className="eliminar"
        onClick={() => deleteCollaborator(id)}
      />
      <div className="encabezado" style={{ backgroundColor: highlight }}>
        <img src={photo} alt={name} />
      </div>
      <div className="info">
        <h4 className="title">{name}</h4>
        <h5 className="position">{position}</h5>

        {fav ? (
          <AiFillHeart color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default CardPeople;
