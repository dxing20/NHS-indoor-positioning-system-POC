import axios from "axios";
import authHeader from "./auth-header";

const base = "https://api-dot-nhsproject-342615.nw.r.appspot.com";
const API_UPDATE = base.concat("/api/log/update");
const API_LOGS = base.concat("/api/data/log/");

class LocationService {
  addLog(qrhash, roomName, level, date) {
    const config = {
      headers: authHeader(),
    };
    return axios.post(
      API_UPDATE,
      {
        qrhash,
        roomName,
        level,
        date,
      },
      config
    );
  }

  getLogs() {
    const config = {
      headers: authHeader(),
    };
    return axios.get(API_LOGS, config);
  }
}

export default new LocationService();
