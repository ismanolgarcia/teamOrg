import { useState } from 'react';
import { uid } from 'uid';
import './App.css';
import Header from './components/header/Header';
import Form from './components/form/Form';
import MiOrg from './components/miorg/MiOrg';
import Team from './components/team/Team';
import Footer from './components/footer/Footer';

function App() {
  const [verForm, setForm] = useState(true);
  const [collaborators, setCollaborators] = useState([]);

  const [teams, setTeams] = useState([
    {
      id: uid(),
      title: 'Programación',
      bgColor: '#D9F7E9',
      highlight: '#57C278',
    },
    {
      id: uid(),
      title: 'Front End',
      bgColor: '#E8F8FF',
      highlight: '#82CFFA',
    },
    {
      id: uid(),
      title: 'Data Science',
      bgColor: '#F0F8E2',
      highlight: '#A6D157',
    },
    {
      id: uid(),
      title: 'Devops',
      bgColor: '#FDE7E8',
      highlight: '#E06B69',
    },
    {
      id: uid(),
      title: 'UX y Diseño',
      bgColor: '#FAE9F5',
      highlight: '#DB6EBF',
    },
    {
      id: uid(),
      title: 'Móvil',
      bgColor: '#FFF5D9',
      highlight: '#FFBA05',
    },
    {
      id: uid(),
      title: 'Innovación y Gestión',
      bgColor: '#FFEEDF',
      highlight: '#FF8A29',
    },
  ]);

  const changeForm = () => {
    setForm(!verForm);
  };

  const registerCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const deleteCollaborator = (id) => {
    const newCollaborator = collaborators.filter(
      (collaborator) => collaborator.id !== id
    );
    setCollaborators(newCollaborator);
  };

  const like = (id) => {
    const newLikes = collaborators.map((newLike) => {
      if (newLike.id === id) {
        newLike.fav = !newLike.fav;
      }
      return newLike;
    });
    setCollaborators(newLikes);
  };

  return (
    <div className="App">
      <Header />
      {verForm === true ? (
        <Form
          teams={teams.map((team) => team.title)}
          registerCollaborator={registerCollaborator}
        />
      ) : (
        <></>
      )}
      <MiOrg changeForm={changeForm} />

      {teams.map(({ title, bgColor, highlight, id }) => (
        <Team
          team={title}
          key={id}
          bgColor={bgColor}
          highlight={highlight}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === title
          )}
          deleteCollaborator={deleteCollaborator}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
