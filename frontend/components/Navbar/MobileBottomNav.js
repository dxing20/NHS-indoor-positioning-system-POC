import { HomeOutlined, UserOutlined, HistoryOutlined } from "@ant-design/icons";
import mobileNavStyles from './MobileNav.module.css';

const MobileBottomNav = () => {
  return (
    <body>
      <nav className={mobileNavStyles.mobileNav}>
        <a href="/" className={mobileNavStyles.icon}>
          <HomeOutlined style={{ fontSize: '30px', color: '#fff' }} />
        </a>
        <a href="/roomHistory" className={mobileNavStyles.icon}>
          <UserOutlined style={{ fontSize: '30px', color: '#fff' }} />
        </a>
        <a href="/patientHistory" className={mobileNavStyles.icon}>
          <HistoryOutlined style={{ fontSize: '30px', color: '#fff' }} />
        </a>
      </nav>
    </body>
  );
}

export default MobileBottomNav;