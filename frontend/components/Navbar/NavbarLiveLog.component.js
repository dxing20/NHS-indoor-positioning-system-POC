import { React, useState, useEffect } from 'react';
import navStyles from "../../styles/Nav.module.css"
import loggingService from '../../pages/api/logging.service';

const NavbarLiveLog = () => {
  let [logs, setLogs] = useState([]);

  useEffect(() => {
    loggingService
      .getLogs()
      .then((d) => {
        setLogs(d.data.logs);
        console.log(logs[0]);
      })
      .catch((error) => {
        alert(JSON.stringify(error.response.data, null, 2));
      });
  });

  return (
    <div className={navStyles.NavbarLiveLog}>

    </div>
  );
}

export default NavbarLiveLog;