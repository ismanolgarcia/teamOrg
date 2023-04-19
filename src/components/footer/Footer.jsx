import './Footer.css';

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: 'url(/assets/img/footer.png)' }}
    >
      <div className="redes">
        <a href="https://www.aluracursos.com/">
          <img src="/assets/img/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img src="/assets/img/twitter.png" alt="twitter" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img src="/assets/img/instagram.png" alt="instagram" />
        </a>
      </div>
      <img src="/assets/img/logo.png" alt="org" />
      <strong>Desarrollado por Alura</strong>
    </footer>
  );
};

export default Footer;
