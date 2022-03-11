import Dropdownbar from "./Dropdownbar.component";
import RoomHistoryTable from "./RoomHistoryTable";
import { useEffect, useState } from "react";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, message, Table, Input, Space } from "antd";
import loggingService from "../../pages/api/logging.service";

const RoomHistoryMain = ({ columns }) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [locations, setLocations] = useState([]);
  const [logs, setLogs] = useState([]);
  const [chosenLocation, setChosenLocation] = useState('');

  useEffect(() => {
    loggingService
      .getLocations()
      .then((d) => {
        setLocations(d.data.locations);
      })
      .catch((error) => {
        alert(JSON.stringify(error.response.data, null, 2));
      });

    loggingService
      .getLogs()
      .then((d) => {
        setLogs(d.data.logs);
        // console.log(logs)
      })
      .catch((error) => {
        alert(JSON.stringify(error.response.data, null, 2));
      });
  }, []);

  const generateLocationsOnMenu = (location) => {
    return (
      <Menu.Item key={location.roomName + '/' + location.level}>
        {location.roomName + " (Level: " + location.level + ")"}
      </Menu.Item>
    )
  }

  const handleMenuClick = (e) => {
    setChosenLocation(e.key);
    loggingService
      .getPatientsInLocation(e.key)
      .then((d) => {
        setLogs(d.data.logs);
      })
      .catch((error) => {
        alert(JSON.stringify(error.response.data, null, 2));
      });
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      {locations.map(generateLocationsOnMenu)}
    </Menu>
  );

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
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
        </Space>
      </div>
    ),

    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',

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

  for (let i = 0; i < columns.length; i++) {
    columns[i] = { ...columns[i], ...getColumnSearchProps(columns[i].dataIndex) }
  }

  return (
    <div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px",
        }}
      >
        <Dropdown overlay={menu}>
          <Button>
            {chosenLocation ? chosenLocation : "Select Room"} <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      <div style={{ padding: '60px' }}>
        <Table columns={columns} dataSource={logs} />
      </div>

    </div>
  );
}

export default RoomHistoryMain;
