import navStyles from '../../styles/Nav.module.css'
import mainStyles from "../../styles/Home.module.css"
import Titleicon from "../Titleicon";
import CardFooter from './DashboardCardFooter';

const RoomHistoryDashboardDisplay = () => {
  return (
    <div>
      <Titleicon
        iconLink={<a href='/roomHistory'><img src="/history.ico" alt="history-icon" className={navStyles.Titleicon} /></a>}
        titleLink={
          <h2>
            <a href='/roomHistory' style={{ color: '#000', fontSize: 20 }}>Room History</a>
          </h2>
        }
      />

      <div className={mainStyles.cardDesc}>
        <h4>General Surgery</h4>
        <p>Patient 123 just left</p>

        <h4>GP Room</h4>
        <p>Patient 63 just left</p>

        <h4>Psych Ward</h4>
        <p>Patient 878 just left</p>
      </div>

      <div className={mainStyles.cardFooter}>
        <CardFooter tabName="View all Room History" link="/roomHistory" />
      </div>

    </div>
  );
}

export default RoomHistoryDashboardDisplay;