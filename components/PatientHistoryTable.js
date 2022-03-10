import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { React, useState, useEffect } from 'react';
import moment from 'moment';
import loggingService from '../pages/api/logging.service';

const data = [
  {
    key: '1',
    name: 'John Brown',
    location: 'GP ward',
    loggingTime: '2022-03-07T09:01:03+00:00',
    logoutTime: '2022-03-07T11:00:00+00:00',
  },
  {
    key: '2',
    name: 'Joe Black',
    location: 'Operating Ward',
    loggingTime: '2022-03-07T09:01:03+00:00',
    logoutTime: '2022-03-07T20:00:00+00:00',
  },
  {
    key: '3',
    name: 'Jim Green',
    location: 'Psych Ward',
    loggingTime: '2022-03-05T08:01:03+00:00',
    logoutTime: '2022-03-05T12:00:00+00:00',
  },
  {
    key: '4',
    name: 'Jim Red',
    location: 'Ward 7A',
    loggingTime: '2022-03-04T20:01:03+00:00',
    logoutTime: '2022-03-04T21:00:00+00:00',
  },
];

const PatientTable = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  let [logs, setLogs] = useState([]);

  useEffect(() => {
    loggingService
      .getLogs()
      .then((d) => {
        setLogs(d.data.logs);
      })
      .catch((error) => {
        alert(JSON.stringify(error.response.data, null, 2));
      });
  });

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          // ref={node => {
          //   searchInput = node;
          // }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),

    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    // onFilterDropdownVisibleChange: visible => {
    //   if (visible) {
    //     setTimeout(() => searchInput.select(), 100);
    //   }
    // },

    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  const columns = [
    {
      title: 'Time',
      dataIndex: 'loggingTime',
      key: 'loggingTime',
      ...getColumnSearchProps('loggingTime'),
      sorter: (a, b) => moment(a.loggingTime).unix() - moment(b.loggingTime).unix(),
      sortDirections: ['descend', 'ascend'],

    },
    {
      title: 'Patient ID',
      dataIndex: 'nhsid',
      key: 'nhsid',
      width: '15%',
      ...getColumnSearchProps('nhsid'),
    },
    {
      title: 'First Name',
      dataIndex: 'firstname',
      key: 'firstname',
      ...getColumnSearchProps('firstname'),
      sorter: (a, b) => a.firstname.localeCompare(b.firstname),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      key: 'lastname',
      ...getColumnSearchProps('lastname'),
      sorter: (a, b) => a.lastname.localeCompare(b.lastname),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Room Name',
      dataIndex: 'roomName',
      key: 'roomName',
      ...getColumnSearchProps('roomName'),
      sorter: (a, b) => a.roomName.localeCompare(b.roomName),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
      ...getColumnSearchProps('level'),
      sorter: (a, b) => a.level - b.level,
      sortDirections: ['descend', 'ascend'],
    },
  ];

  return (
    <Table columns={columns} dataSource={logs} />
  )
}

export default PatientTable;
