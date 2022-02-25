import axios from "axios";

const API_UPDATE = "http://localhost:8080/api/log/update";
const API_LOGS = "http://localhost:8080/api/data/log/";

class LocationService {
  addLog(qrhash, roomName, level, date, apiKey) {
    const config = {
      headers: { Authorization: apiKey },
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

  getLogs(jwt) {
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    return axios.get(API_LOGS, config);
  }
}

export default new LocationService();
