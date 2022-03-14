import DataTable from "../DataTable";
import moment from 'moment';

const PatientHistoryTable = () => {
  const columns = [
    {
      title: 'Time',
      dataIndex: 'loggingTime',
      key: 'loggingTime',
      sorter: (a, b) => moment(a.loggingTime).unix() - moment(b.loggingTime).unix(),
      sortDirections: ['descend', 'ascend'],

    },
    {
      title: 'Patient ID',
      dataIndex: 'nhsid',
      key: 'nhsid',
      width: '15%',
    },
    {
      title: 'First Name',
      dataIndex: 'firstname',
      key: 'firstname',
      sorter: (a, b) => a.firstname.localeCompare(b.firstname),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      key: 'lastname',
      sorter: (a, b) => a.lastname.localeCompare(b.lastname),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Room Name',
      dataIndex: 'roomName',
      key: 'roomName',
      sorter: (a, b) => a.roomName.localeCompare(b.roomName),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
      sorter: (a, b) => a.level - b.level,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  return (
    <div>
      <DataTable columns={columns} />
    </div>
  );
}

export default PatientHistoryTable;