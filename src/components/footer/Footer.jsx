import FooterStyled from '../../StyledComponents/Footer';

const Footer = () => {
  return (
    <FooterStyled style={{ backgroundImage: 'url(/assets/img/footer.png)' }}>
      <div className="redes">
        <a
          href="https://ismanolgarcia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/img/facebook.png" alt="Facebook" className="img" />
        </a>
        <a
          href="https://twitter.com/ismanolgarcia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/img/twitter.png" alt="twitter" className="img" />
        </a>
        <a
          href="https://instagram.com/ismanolgarcia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/img/instagram.png"
            alt="instagram"
            className="img"
          />
        </a>
      </div>
      <img src="/assets/img/logo.png" alt="org" />
      <strong>
        Desarrollado por{' '}
        <a
          href="https://github.com/ismanolgarcia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ismanol García
        </a>
      </strong>
    </FooterStyled>
  );
};

export default Footer;
