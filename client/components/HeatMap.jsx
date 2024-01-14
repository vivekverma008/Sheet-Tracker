'use client'
import React, { useState } from 'react';
import HeatMap from '@uiw/react-heat-map';

const value = [
  { date: '2024/1/1', count:12 },
  
];

const Demo = () => {
  const [selected, setSelected] = useState('')
  let ct = 1;
  const date = new Date();

  const end = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
  console.log(end);
  return (
    <div>
      <HeatMap      
        value={value}
        width = {700}
        startDate={new Date(`${date.getFullYear()}/01/01`)}
        endDate={new Date(end)}
        rectRender={(props, data) => {
          if (selected !== '') {
            
            props.opacity = data.date === selected ? 1 : 0.4
          }
          
          return (
            <rect {...props} onClick={() => {
              setSelected(data.date === selected ? '' : data.date);
            }} />
          );
        }}
      />
    </div>
  )
};
export default Demo