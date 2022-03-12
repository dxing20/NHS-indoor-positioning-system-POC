import { useState } from "react";
import Titleicon from "../Titleicon";
import navStyles from "../../styles/Nav.module.css"
import Hamburger from './Hamburger.component';
import authService from "../../pages/api/auth.service";

const Navbar = () => {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  const handleLogout = () => {
    authService.logout();
  }

  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.navTitle}>
        <Titleicon
          iconLink={<a href='/'><img src="/title.ico" alt="Navbar-icon" className={navStyles.Titleicon} /></a>}
          titleLink={<a href='/' style={{ color: '#fff', fontSize: 20 }}>Patient Locator</a>}
        />
      </div>

      <div className='navitems'>
        <div className={navStyles.navitem}>
          <a href="/">Dashboard</a>
          <a href="roomHistory">Room History</a>
          <a href="patientHistory">Patient History</a>
          <a onClick={handleLogout}>Log Out</a>
          <div className={navStyles.indicator}></div>
        </div>
      </div>
      <div className={navStyles.hamburgerWrapper} onClick={toggleHamburger}>
        <Hamburger />
      </div>

      <style jsx>{`

        @media (max-width: 925px) {
          .navitems {
            display: ${hamburgerOpen ? 'flex' : 'none'};
            justify-content: space-between;
            align-items: center;
          }
        }

      `}</style>

    </nav>
  );
}

export default Navbar;