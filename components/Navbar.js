import navStyles from "../styles/Nav.module.css"
import Titleicon from "./Titleicon";
import { Row, Col } from "antd";

const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
      <Row>
        <Col span={6}>
          <Titleicon
            iconLink={<a href='/'><img src="/title.ico" alt="Navbar-icon" className={navStyles.Titleicon} /></a>}
            titleLink={<a href='/' style={{ color: '#fff', fontSize: 20 }}>Patient Locator</a>}
          />
        </Col>
        <Col span={12}>
          <div>
            <div className={navStyles.navitem}>
              <a href="/">Dashboard</a>
              <a href="roomHistory">Room History</a>
              <a href="patientHistory">Patient History</a>
              <div className={navStyles.indicator}></div>
            </div>
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