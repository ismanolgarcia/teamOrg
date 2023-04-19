import './MiOrg.css';

const MiOrg = ({ changeForm }) => {
  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img
        src="/assets/icon/icon_add.svg"
        alt="icon add"
        onClick={changeForm}
      />
    </section>
  );
};

export default MiOrg;
