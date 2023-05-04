import styled from 'styled-components';

const OrgSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 400;
  color: #6278f7;
  padding: 0 0 24px 0;
  margin: 50px;
  border-bottom: 4px solid #6278f7;
`;

const MiOrg = ({ changeForm }) => {
  return (
    <OrgSection>
      <Title>Mi organización</Title>
      <img
        src="/assets/icon/icon_add.svg"
        alt="icon add"
        onClick={changeForm}
      />
    </OrgSection>
  );
};

export default MiOrg;
