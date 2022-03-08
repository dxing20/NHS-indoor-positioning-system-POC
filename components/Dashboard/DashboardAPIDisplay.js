import { useState, useEffect } from "react";
import DashboardWrapper from "./DashboardWrapper";
import LineGraph from "./Graphs/LineGraph.component";

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

  return (
    <div>
      <DashboardWrapper
        graph={<LineGraph data={data} />}
      />
    </div>
  );
}

export default APIDashboardDisplay;