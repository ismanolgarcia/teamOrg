import styled from 'styled-components';
import headero from '../../../public/assets/img/Header.png';

const Headere = styled.header`
  background-color: #6278f7;
  text-align: center;
`;

const ImgHeader = styled.img`
  max-width: 100%;
`;

const Header = () => {
  return (
    <Headere>
      <ImgHeader src={headero} />
    </Headere>
  );
};

export default Header;
