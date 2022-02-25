import axios from "axios";

const API_PATIENT_REGISTER = "http://localhost:8080/api/admin/registerPatient";
const API_PATIENT_REMOVE = "http://localhost:8080/api/admin/unregister";
const API_PATIENT_GET = "http://localhost:8080/api/data/patient";

class PatientService {
  registerPatient(nhsid, firstname, lastname, jwt) {
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    return axios.post(
      API_PATIENT_REGISTER,
      {
        nhsid,
        firstname,
        lastname,
      },
      config
    );
  }

  deletePatient(nhsid, jwt) {
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    return axios.post(
      API_PATIENT_REMOVE,
      {
        nhsid,
        type: "patient",
      },
      config
    );
  }

  getPatients(jwt, limit = 0) {
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    return axios.get(API_PATIENT_GET, config);
  }
}

export default new PatientService();
