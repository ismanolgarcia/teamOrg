import CardPeople from '../card/CardPeople';
import './Team.css';

const Team = ({
  team,
  bgColor,
  highlight,
  collaborators,
  deleteCollaborator,
  like,
}) => {
  return (
    <>
      {collaborators.length > 0 ? (
        <section className="team" style={{ backgroundColor: bgColor }}>
          <h3 style={{ borderColor: highlight }}>{team} </h3>
          <div className="team-equip">
            {collaborators.map((collaborator) => (
              <CardPeople
                datos={collaborator}
                key={collaborator}
                highlight={highlight}
                deleteCollaborator={deleteCollaborator}
                like={like}
              />
            ))}
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default Team;
