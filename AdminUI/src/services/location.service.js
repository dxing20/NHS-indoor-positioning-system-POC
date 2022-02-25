import axios from "axios";

const API_LOCATION_ADD = "http://localhost:8080/api/admin/addLocation";
const API_LOCATION_DELETE = "http://localhost:8080/api/admin/removeLocation";
const API_LOCATION_GET = "http://localhost:8080/api/data/location";

class LocationService {
  addLocation(roomName, level, jwt) {
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    return axios.post(
      API_LOCATION_ADD,
      {
        roomName,
        level,
      },
      config
    );
  }

  deleteLocation(roomName, level, jwt) {
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    return axios.post(
      API_LOCATION_DELETE,
      {
        roomName,
        level,
      },
      config
    );
  }

  getLocations(jwt, limit = 0) {
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    return axios.get(API_LOCATION_GET, config);
  }
}

export default new LocationService();
