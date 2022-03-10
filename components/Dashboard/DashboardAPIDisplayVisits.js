import React, { useState, useEffect } from 'react';
import DashboardWrapper from './DashboardWrapper';
import BarGraph from './Graphs/BarGraph.component';

const APIDashboardDisplayVisits = () => {
  const data = [
    {
      room: 'GP Room',
      visits: 10,
    },
    {
      room: 'Psych Ward',
      visits: 16,
    },
    {
      room: 'Ward 7',
      visits: 50,
    },
    {
      room: 'Ward 7A',
      visits: 145,
    },
    {
      room: 'Children\'s Care 12b',
      visits: 48,
    },
    {
      room: 'South Corridor 63',
      visits: 38,
    },
    {
      room: 'South Corridor 64',
      visits: 20,
    },
    {
      room: 'North Corridor 65',
      visits: 38,
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