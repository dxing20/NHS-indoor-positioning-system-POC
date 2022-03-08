import PatientTable from "../components/PatientHistoryTable";
import patientHistoryStyles from "../styles/PatientHistory.module.css"

const patientHistory = () => {
  return (
    <div>


      <div className={patientHistoryStyles.patientTable}>
        {/* {PatientTable.render()} */}
        <PatientTable />
      </div>
    </div>
  );
}

export default patientHistory;