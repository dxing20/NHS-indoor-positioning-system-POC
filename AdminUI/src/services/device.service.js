import axios from "axios";

const API_DEVICE_ADD = "http://localhost:8080/api/admin/addDevice";
const API_DEVICE_DELETE = "http://localhost:8080/api/admin/removeDevice";
const API_DEVICE_GET = "http://localhost:8080/api/data/device";

class DeviceService {
  addDevice(name, apiKey, jwt) {
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    return axios.post(
      API_DEVICE_ADD,
      {
        name,
        apiKey,
      },
      config
    );
  }

  deleteDevice(name, apiKey, jwt) {
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    return axios.post(
      API_DEVICE_DELETE,
      {
        name,
        apiKey,
      },
      config
    );
  }

  getDevices(jwt, limit = 0) {
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    return axios.get(API_DEVICE_GET, config);
  }
}

export default new DeviceService();
