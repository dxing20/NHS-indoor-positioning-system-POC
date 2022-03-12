import { useEffect, useState } from "react";
import loggingService from "../../pages/api/logging.service";
import CardFooter from "./DashboardCardFooter";
import Titleicon from "../Titleicon";
import mainStyles from "../../styles/Home.module.css"
import navStyles from "../../styles/Nav.module.css"

const PatientHistoryDashboardDisplay = () => {
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

  const generatePatientsLogs = (log) => {
    return (
      <div>
        <h4>{log.firstname + ' ' + log.lastname}</h4>
        <p>Entered {log.roomName} on level {log.level} at {log.loggingTime}</p>
      </div>
    )
  }

  return (
    <div>
      <Titleicon
        iconLink={<a href='/patientHistory'><img src="/avatar.ico" alt="avatar-icon" className={navStyles.Titleicon} /></a>}
        titleLink={
          <h2>
            <a href='/patientHistory' style={{ color: '#000', fontSize: 20 }} >Patient History</a>
          </h2>
        }
      />

      <div className={mainStyles.cardDesc}>
        {logs.map(generatePatientsLogs)}
      </div>
      <div className={mainStyles.cardFooter}>
        <CardFooter tabName="View all Patient History" link="/patientHistory" />
      </div>
    </div>
  );
}

export default PatientHistoryDashboardDisplay;