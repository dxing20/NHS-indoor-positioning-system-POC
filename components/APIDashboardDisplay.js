import { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import CardFooter from "./CardFooter";
import Titleicon from "./Titleicon";
import mainStyles from "../styles/Home.module.css"
import navStyles from "../styles/Nav.module.css"

const APIDashboardDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    width: 490,
    height: 162,
    // autoFit: 'true',
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  return (
    <div>
      <Titleicon
        iconLink={<a href='/apis'><img src="/API.ico" alt="API-icon" className={navStyles.Titleicon} /></a>}
        titleLink={<a href='/apis' style={{ color: '#000', fontSize: 20 }}>APIs</a>}
      />

      <div className={mainStyles.APIcontainer}>
        <Line {...config} />
      </div>
      <CardFooter tabName="View all APIs" link="/apis" />
    </div>
  );
}

export default APIDashboardDisplay;