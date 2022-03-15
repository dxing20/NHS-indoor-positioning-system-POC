import Link from "next/link";
import { HomeOutlined, UserOutlined, HistoryOutlined } from "@ant-design/icons";
import mobileNavStyles from './MobileNav.module.css';

const MobileBottomNav = () => {
  return (
    <body>
      <nav className={mobileNavStyles.mobileNav}>
        <Link href="/" passHref className={mobileNavStyles.icon}>
          <HomeOutlined style={{ fontSize: '30px', color: '#fff' }} />
        </Link>
        <Link href="/roomHistory" passHref className={mobileNavStyles.icon}>
          <UserOutlined style={{ fontSize: '30px', color: '#fff' }} />
        </Link>
        <Link href="/patientHistory" passHref className={mobileNavStyles.icon}>
          <HistoryOutlined style={{ fontSize: '30px', color: '#fff' }} />
        </Link>
      </nav>
    </body>
  );
}

export default MobileBottomNav;