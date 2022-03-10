import navStyles from "../../styles/Nav.module.css"

const Hamburger = () => {
  return (
    <div className={navStyles.hamburger}>
      <span className={navStyles.bar}></span>
      <span className={navStyles.bar}></span>
      <span className={navStyles.bar}></span>
    </div>
  );
}

export default Hamburger;