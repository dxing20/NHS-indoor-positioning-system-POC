import navStyles from "../../styles/Nav.module.css"

const Hamburger = () => {
  return (
    <div className={navStyles.hamburger}>
      <div className={navStyles.bar} />
      <div className={navStyles.bar} />
      <div className={navStyles.bar} />
      {/* <span className={navStyles.bar}></span>
      <span className={navStyles.bar}></span>
      <span className={navStyles.bar}></span> */}
    </div>
  );
}

export default Hamburger;