import React from 'react'
import mqtt from 'mqtt/dist/mqtt'
import { useEffect,useState } from 'react'
export default function () {
    const [color, setColor] = useState('red');
  const [lightColors, setLightColors] = useState({
    Light_bedroom: 'blue',
    Light_garden: 'blue',
    Light_garage: 'blue',
    Light1_kitchen: 'blue',
    Light2_kitchen:'blue',
    Light_livingroom:'blue',
    Light2_livingroom:'blue',
    Light_bathroom:'blue'
  })
   
    
    // Add more lights and their default colors here
  
  return (
    <div>

    </div>
  )
}
