import Titleicon from "../Titleicon";
import CardFooter from "./DashboardCardFooter";
import navStyles from '../../styles/Nav.module.css'
import mainStyles from "../../styles/Home.module.css"

const DashboardWrapper = ({ graph }) => {
  return (
    <div>
      <Titleicon
        iconLink={<a href='/apis'><img src="/API.ico" alt="API-icon" className={navStyles.Titleicon} /></a>}
        titleLink={<a href='/apis' style={{ color: '#000', fontSize: 20 }}>APIs</a>}
      />

      <div className={mainStyles.APIcontainer}>
        {graph}
      </div>
      <CardFooter tabName="View all APIs" link="/apis" />
    </div>
  );
}

export default DashboardWrapper;