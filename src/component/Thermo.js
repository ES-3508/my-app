import React from 'react'
import { useEffect, useState } from 'react';
import Thermometer from 'react-thermometer-component';
import mqtt from 'mqtt/dist/mqtt'

export default function Thermo() {

    const [ temperature, setTemperature ] = useState(50);

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
            <Thermometer
                theme="light"
                value={temperature}
                max="100"
                steps="3"
                format="°C"
                size="large"
                height="300"
            />

        </div>
      )
}
