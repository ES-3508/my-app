import React from 'react';
import Bulbs from 'react-bulb';

export default function Bulb(props) {
  return (
    <div> 
      <h1>Bulb state</h1>
    <Bulbs
    size={60}
    color={props.color}
  />
  </div>
  )
}
