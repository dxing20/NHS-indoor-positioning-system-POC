import Link from "next/link";
import Image from "next/image";
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
            iconLink={<Link href='/' passHref><Image src="/title.ico" alt="Navbar-icon" width="40" height="40" className={navStyles.Titleicon} /></Link>}
            titleLink={<Link href='/' ><a style={{ color: '#fff', fontSize: 20 }}>Patient Locator</a></Link>}
          />
        </div>

        <div className={navStyles.navitems}>
          <div className={navStyles.navitem}>
            <Link href="/" passHref>Dashboard</Link>
            <Link href="roomHistory" passHref>Room History</Link>
            <Link href="patientHistory" passHref>Patient History</Link>
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