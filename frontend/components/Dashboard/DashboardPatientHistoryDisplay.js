import { useEffect, useState } from "react";
import loggingService from "../../pages/api/logging.service";
import DashboardWrapper from "./DashboardWrapper";

const PatientHistoryDashboardDisplay = () => {
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

  const generatePatientsLogs = (log) => {
    return (
      <div>
        <h4>{log.firstname + ' ' + log.lastname}</h4>
        <p>Entered {log.roomName} on level {log.level} at {log.loggingTime}</p>
      </div>
    )
  }

  return (
    <DashboardWrapper
      title="Room History"
      iconLink='/patientHistory'
      iconImg="/avatar.ico"
      iconAlt="avatar-icon"
      graph={logs.map(generatePatientsLogs)}
      cardfooterdesc="View all Patient History"
    />
  );
}

export default PatientHistoryDashboardDisplay;