import { useEffect, useState } from "react";
import loggingService from "../../pages/api/logging.service";
import navStyles from '../../styles/Nav.module.css'
import mainStyles from "../../styles/Home.module.css"
import Titleicon from "../Titleicon";
import CardFooter from './DashboardCardFooter';

const RoomHistoryDashboardDisplay = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    loggingService
      .getLimitedLogs(3)
      .then((d) => {
        setLogs(d.data.logs);
        console.log(logs)
      })
      .catch((error) => {
        alert(JSON.stringify(error.response.data, null, 2));
      });
  }, []);

  const generateLocationsLog = (log) => {
    return (
      <div>
        <h4>{log.roomName + ' (Level: ' + log.level + ')'}</h4>
        <p>{log.firstname + ' ' + log.lastname} entered at {log.loggingTime}</p>
      </div>
    )
  }

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
        {logs.map(generateLocationsLog)}
      </div>

      <div className={mainStyles.cardFooter}>
        <CardFooter tabName="View all Room History" link="/roomHistory" />
      </div>

    </div>
  );
}

export default RoomHistoryDashboardDisplay;