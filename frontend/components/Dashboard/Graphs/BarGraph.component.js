import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const BarGraph = ({ data }) => {

  const config = {
    data,
    width: 490,
    height: 162,
    xField: 'room',
    yField: 'visits',
    legend: {
      title: "Most visited rooms",
    },
    label: {
      position: 'middle',

      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;

};

export default BarGraph;