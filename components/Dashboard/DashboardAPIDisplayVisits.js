import React, { useState, useEffect } from 'react';
import DashboardWrapper from './DashboardWrapper';
import BarGraph from './Graphs/BarGraph.component';

const APIDashboardDisplayVisits = () => {
  const data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];

  return (
    <div>
      <DashboardWrapper
        graph={<BarGraph data={data} />}
      />
    </div>
  );
}

export default APIDashboardDisplayVisits;