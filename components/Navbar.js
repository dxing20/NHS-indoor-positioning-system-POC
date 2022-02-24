import navStyles from "../styles/Nav.module.css"
import Titleicon from "./Titleicon";
import { Row, Col } from "antd";

const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
      <Row>
        <Col span={6}><Titleicon className={navStyles.Titleicon}/></Col>
        <Col span={12}>
          <div>
            <ul className={navStyles.navitems}>
              <li className={navStyles.navitem}>
                <a href="/">Dashboard</a>
              </li>        
              <li className={navStyles.navitem}>
                <a href="roomHistory">Room History</a>
              </li>        
              <li className={navStyles.navitem}>
                <a href="patientHistory">Patient History</a>
              </li>        
              <li className={navStyles.navitem}>
                <a href="apis">APIs</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col span={6}>
          <div className={navStyles.settingslogo} >
            <img src="/settings.ico" alt="settings-icon" />
          </div>
        </Col>
      </Row>
    </nav>        
  );
}
 
export default Navbar;