import DataTable from "../DataTable";
import RoomHistoryMain from "./RoomHistoryMain";


const RoomHistoryTable = (inputLogs) => {
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
  ];

  return (
    <div>
      <RoomHistoryMain columns={columns} />
    </div>
  );
}

export default RoomHistoryTable;