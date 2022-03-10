import PatientHistoryTable from "../components/PatientHistory/PatientHistoryTable";
import patientHistoryStyles from "../styles/PatientHistory.module.css"

const patientHistory = () => {
  return (
    <div>
      <div className={patientHistoryStyles.patientTable}>
        <PatientHistoryTable />
      </div>
    </div>
  );
}

export default patientHistory;