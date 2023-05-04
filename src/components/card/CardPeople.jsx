import styled from 'styled-components';
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {
  Card,
  CardHead,
  CardInfo,
  CardTitle,
  CardPosition,
  Image,
} from '../../StyledComponents/CardStyled/Main';
const CardPeople = ({ datos, highlight, deleteCollaborator, like }) => {
  const { name, position, photo, team, id, fav } = datos;
  return (
    <Card>
      <AiFillCloseCircle
        className="delete"
        onClick={() => deleteCollaborator(id)}
      />
      <CardHead className="encabezado" style={{ backgroundColor: highlight }}>
        <Image src={photo} alt={name} />
      </CardHead>
      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <CardPosition>{position}</CardPosition>

        {fav ? (
          <AiFillHeart color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </CardInfo>
    </Card>
  );
};

export default CardPeople;
