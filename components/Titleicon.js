import titleiconStyles from '../styles/Titleicon.module.css'

const Titleicon = () => {
    return (
      <div className={titleiconStyles.container}>
        <a href='/'><img src="/title.ico" alt="Navbar-icon" className={titleiconStyles.logo} /></a>
        <h3 className={titleiconStyles.navtitle}>
          <a href='/'>Patient Locator</a>
        </h3>
      </div>
    );
}
 
export default Titleicon;