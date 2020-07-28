import React from 'react';
import {
  AreaChart,
  Line, 
  XAxis,
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  Area,
  ResponsiveContainer
} from 'recharts';


const data = [
  {
    name: 'N240,000,000', uv: 0, pv: 2400, amt: 2400,
  },
  {
    name: 'N240,000,000', uv: 0, pv: 2400, amt: 2400,
  },
  {
    name: 'N240,000,000', uv: 0, pv: 2400, amt: 2400,
  },
  {
    name: 'N240,000,000', uv: 5, pv: 2400, amt: 2400,
  },
  {
    name: 'N240,000,000', uv: 0, pv: 2400, amt: 2400,
  },
  {
    name: 'N240,000,000', uv: 15, pv: 2400, amt: 2400,
  },
  {
    name: 'N240,000,000', uv: 0, pv: 2400, amt: 2400,
  },
  {
    name: 'N240,000,000', uv: 50, pv: 2400, amt: 2400,
  },
  {
    name: 'N240,000,000', uv: 20, pv: 2400, amt: 2400,
  },
  {
    name: 'N240,000,000', uv: 40, pv: 2400, amt: 2400,
  },
  {
    name: 'N240,000,000', uv: 30, pv: 2400, amt: 2400,
  },
  {
    name: 'N240,000,000', uv: 50, pv: 2400, amt: 2400,
  },
  
  
];

export default function Chart() {
  return (
    <ResponsiveContainer aspect={4.9} width="100%" height={120}>
    <AreaChart
        data={data}
        margin={{
          top: 10, right: 0, left: 0, bottom: 0,
        }}
      >
        <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8CB13D" stopOpacity={0.9}/>
      <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0}/>
    </linearGradient>
    </defs>
        <CartesianGrid strokeDasharray="3 3" opacity={0} />
        <XAxis dataKey="name" hide={true} />
        <YAxis  hide={true} />
        <Tooltip />
        <Area type="monotone" dataKey="uv" fillOpacity={1} stroke="#8CB13D"fill="url(#colorUv)" />
      </AreaChart>
      </ResponsiveContainer>
  )
}
