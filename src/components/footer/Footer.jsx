import styled from 'styled-components';
import FooterStyled from '../../StyledComponents/Footer';

const Footer = () => {
  return (
    <FooterStyled style={{ backgroundImage: 'url(/assets/img/footer.png)' }}>
      <div className="redes">
        <a href="https://www.aluracursos.com/">
          <img src="/assets/img/facebook.png" alt="Facebook" className="img" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img src="/assets/img/twitter.png" alt="twitter" className="img" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img
            src="/assets/img/instagram.png"
            alt="instagram"
            className="img"
          />
        </a>
      </div>
      <img src="/assets/img/logo.png" alt="org" />
      <strong>Desarrollado por Alura</strong>
    </FooterStyled>
  );
};

export default Footer;
