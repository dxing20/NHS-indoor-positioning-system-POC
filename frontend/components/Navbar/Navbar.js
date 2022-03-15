import Titleicon from "../Titleicon";
import navStyles from "../../styles/Nav.module.css"
import authService from "../../pages/api/auth.service";
import MobileBottomNav from "./MobileBottomNav";

const Navbar = () => {

  const handleLogout = () => {
    authService.logout();
  }

  return (
    <div>

      <nav className={navStyles.navbar}>
        <div className={navStyles.navTitle}>
          <Titleicon
            iconLink={<a href='/'><img src="/title.ico" alt="Navbar-icon" className={navStyles.Titleicon} /></a>}
            titleLink={<a href='/' style={{ color: '#fff', fontSize: 20 }}>Patient Locator</a>}
          />
        </div>

        <div className={navStyles.navitems}>
          <div className={navStyles.navitem}>
            <a href="/">Dashboard</a>
            <a href="roomHistory">Room History</a>
            <a href="patientHistory">Patient History</a>
            <a onClick={handleLogout}>Log Out</a>
            <div className={navStyles.indicator}></div>
          </div>
        </div>
        <style jsx>{`
  
          @media (max-width: 992px) {
            .navitems {
              display: none;
            }
          }
  
        `}</style>

      </nav>

      <MobileBottomNav />
    </div>
  );
}

export default Navbar;