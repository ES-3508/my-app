import React,{useState,useEffect} from 'react'
import Data from '../component/Data'
import mqtt from 'mqtt/dist/mqtt';
import { Typography } from '@mui/material';

export default function Info() {
    const [data, setData] = useState({
        Light_bedroom: 'blue',
        Light_garden: 'blue',
        Light_garage: 'blue',
        Light1_kitchen: 'blue',
        Light2_kitchen:'blue',
        Light_livingroom:'blue',
        Light2_livingroom:'blue',
        Light_bathroom:'blue',
        Light_bathroom:'blue',
        tBr1:404,
        tBr2:404,
        hBr1:404,
        mBr1:NaN,
        tOr1:404,
        hOr1:404,
        mOr1:NaN,
        lightIntenisty:404,
        CO2:404,
        ev:404,
        device1:false,
        device2:false,
        gas:false,
        flame:false
        
        // Add more lights and their default colors here
      });

      const handleJsonMessage = (json) => {
        
    
        for (const lightKey in data) {
          console.log(lightKey)
          if (json[lightKey]) {
            setData((prevLightColors) => ({
              ...prevLightColors,
              [lightKey]: json[lightKey],
            }));
          }
        }
      };

      const client = mqtt.connect('ws://192.168.219.1:8083/mqtt')
  useEffect(() => {

        
        //const topic1="data/pa08/pa08dash/0808";
        
        client.on('connect', function() {
        client.subscribe('myTopic');
        console.log("Client has subscribed")
        });

        client.on('message', (topic, message) => {
          console.log(message.toString());
        handleJsonMessage(JSON.parse(message.toString()));
        });
    },[])

  return (
    <div>
        <h1></h1>
        <Typography style={{
    color: 'darkgreen', fontSize: '50px',textAlign: 'center',
  }}>Live Home Information</Typography>
        <Data area={"Ground floor Bed Room"} temperature={data['tBr1']} humidity={data['hBr1']} isMotionDetected={data['mBr1']}/>
        <Data area={"First floor Bed Room"} temperature={data['tBr2']} humidity={data['hBr1']} lightIntensity={data['lightIntenisty']} isMotionDetected={data['mBr1']}/>
        
        {/* <Data area={"First floor Bed Room"} temperature={data['tBr2']} humidity={data['hBr2']} isMotionDetected={data['mBr2']}/> */}
        <Data area={"Kitchen"} temperature={30} humidity={50} isMotionDetected={0} device1={data['device1']} device2={data['device2']}/>
        <Data area={"Bathroom"} temperature={30} humidity={50} isMotionDetected={0} CO2={data['CO2']} Voc={data['ev']} />
        <Data area={"Fire"}  gas={data['gas']} flame={data['flame']} />
        <Data area={"Office room"} temperature={data['tOr1']} humidity={data['hOr1']} isMotionDetected={data['mOr1']}/>
    </div>
  )
}
