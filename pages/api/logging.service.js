import axios from "axios";
import authHeader from "./auth-header";

const base = "https://api-dot-nhsproject-342615.nw.r.appspot.com";
const API_UPDATE = base.concat("/api/log/update");
const API_LOCATION_GET = base.concat("/api/data/location");
const API_LOGS = base.concat("/api/data/log/");
const API_LOCATION_GET_PATIENTS = base.concat("/api/data/log/location/");

class LoggingService {
  getLocations(limit = 0) {
    const config = {
      headers: authHeader(),
    };
    return axios.get(API_LOCATION_GET, config);
  }

  getLogs() {
    const config = {
      headers: authHeader(),
    };
    return axios.get(API_LOGS, config);
  }

  getPatientsInLocation(location) {
    let route = ""
    route = API_LOCATION_GET_PATIENTS.concat(location);

    const config = {
      headers: authHeader(),
    };
    return axios.get(route, config);
  }
}

export default new LoggingService();
