import React from 'react'
import { useEffect, useState } from 'react';
import Thermometer from 'react-thermometer-component';
import mqtt from 'mqtt/dist/mqtt'
import { Box } from '@mui/material';

export default function Thermo() {

    const [ temperature, setTemperature ] = useState(30);

    useEffect(() => {

        const client = mqtt.connect('ws://192.168.8.110:8083/mqtt')      
        client.on('connect', function() {
        client.subscribe("floor/room/1");
        console.log("Client has subscribed")
        });

        client.on('message', (topic, message) => {
        handleJsonMessage(JSON.parse(message.toString()));
        });
    },[])

    const handleJsonMessage = (json) => {      
        setTemperature(json.temperature) 
    }

    return (
        <div >
            <h1 >Temperature</h1><br/>
            <Box  display="flex"
  justifyContent="center"
  alignItems="center"> 
                <Thermometer
                    theme="dark"
                    value={temperature}
                    max="45"
                    steps="3"
                    form at="°C"
                    size="large"
                    height="300"
                />
            </Box>
        </div>
      )
}
