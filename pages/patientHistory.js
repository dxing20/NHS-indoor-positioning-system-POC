import PatientTable from "../components/PatientHistoryTable";

const patientHistory = () => {
  return (
    <div>
      {PatientTable.render()}
    </div>
  );
}

export default patientHistory;