import { useEffect, useState } from "react";
import loggingService from "../../pages/api/logging.service";
import DashboardWrapper from "./DashboardWrapper";


const RoomHistoryDashboardDisplay = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    loggingService
      .getLimitedLogs(3)
      .then((d) => {
        setLogs(d.data.logs);
        // console.log(logs)
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
    <DashboardWrapper
      title="Room History"
      iconLink='/roomHistory'
      iconImg="/history.ico"
      iconAlt="history-icon"
      graph={logs.map(generateLocationsLog)}
      cardfooterdesc="View all Room History"
    />
  );
}

export default RoomHistoryDashboardDisplay;