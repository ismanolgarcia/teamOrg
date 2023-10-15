import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header, Form, MiOrg, Team, Footer } from './components';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [verForm, setForm] = useState(true);
  const [collaborators, setCollaborators] = useState([]);

  useEffect(() => {
    const savedCollaborators = JSON.parse(
      localStorage.getItem('collaborators')
    );
    if (savedCollaborators) {
      setCollaborators(savedCollaborators);
    }
  }, []);

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      title: 'Programación',
      bgColor: '#D9F7E9',
      highlight: '#57C278',
    },
    {
      id: uuidv4(),
      title: 'Front End',
      bgColor: '#E8F8FF',
      highlight: '#82CFFA',
    },
    {
      id: uuidv4(),
      title: 'Data Science',
      bgColor: '#F0F8E2',
      highlight: '#A6D157',
    },
    {
      id: uuidv4(),
      title: 'Devops',
      bgColor: '#FDE7E8',
      highlight: '#E06B69',
    },
    {
      id: uuidv4(),
      title: 'UX y Diseño',
      bgColor: '#FAE9F5',
      highlight: '#DB6EBF',
    },
    {
      id: uuidv4(),
      title: 'Móvil',
      bgColor: '#FFF5D9',
      highlight: '#FFBA05',
    },
    {
      id: uuidv4(),
      title: 'Innovación y Gestión',
      bgColor: '#FFEEDF',
      highlight: '#FF8A29',
    },
  ]);
  const changeForm = () => {
    setForm(!verForm);
  };

  const registerCollaborator = (collaborator) => {
    const newCollaborator = { ...collaborator, id: uuidv4() };
    setCollaborators([...collaborators, newCollaborator]);
    localStorage.setItem(
      'collaborators',
      JSON.stringify([...collaborators, newCollaborator])
    );
  };

  const deleteCollaborator = (id) => {
    const newCollaborators = collaborators.filter(
      (collaborator) => collaborator.id !== id
    );
    setCollaborators(newCollaborators);
    localStorage.setItem('collaborators', JSON.stringify(newCollaborators));
  };

  const like = (id) => {
    const newLikes = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
        return { ...collaborator, fav: !collaborator.fav };
      } else {
        return collaborator;
      }
    });
    setCollaborators(newLikes);
    localStorage.setItem('collaborators', JSON.stringify(newLikes));
  };

  return (
    <div className="App">
      <GlobalStyle />
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
