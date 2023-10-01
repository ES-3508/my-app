import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls ,Sky} from '@react-three/drei';
import Model2 from '../component/ModelComponent';
// import { AmbientLight } from 'three';
import { Typography, Box } from '@mui/material';
import { Slider } from '@mui/material'; // Use a slider component from your UI library
import { Panorama } from '../utils/Panorama';
import Lights from '../component/Lights';



 

export default function Threed(){
   // import { Text } from 'drei'
const [spotlightPositionX, setSpotlightPositionX] = useState(0);
const [spotlightPositionY, setSpotlightPositionY] = useState(3);
const [spotlightPositionZ, setSpotlightPositionZ] = useState(0);

 // Function to handle X-axis slider change
 const handleXSliderChange = (event, newValue) => {
   setSpotlightPositionX(newValue);
   console.log(spotlightPositionX)
 };

 // Function to handle Y-axis slider change
 const handleYSliderChange = (event, newValue) => {
   setSpotlightPositionY(newValue);
 };

 // Function to handle Z-axis slider change
 const handleZSliderChange = (event, newValue) => {
   setSpotlightPositionZ(newValue);
 };
  return (
    <div>
       <Box textAlign= 'center'>
         <Typography variant="h2" gutterBottom >
            Live Home
         </Typography>

       </Box>
       
         
         <Canvas
            camera={{ position: [2, 0, 12.25], fov: 15 }}
            style={{
               backgroundColor: '#111a21',
               width: '100vw',
               height: '100vh',
            }}
         >
         <Sky/>
         {/* <ambientLight intensity={1}  />
         <directionalLight  intensity={1} />  */}
        <Lights />

         {/* <spotLight intensity={1} color="red"  position={[9, 8, -8.5]}/> */}
   
            
            <Suspense fallback={null}>
               <Model2 position={[0, 0, 0]} /> /* highlight-line
               
               
            </Suspense>
            <OrbitControls minDistance={0} // Set your desired minimum zoom level here
      maxDistance={100} // Set your desired maximum zoom level here
       />
         </Canvas> 

    </div>
  )
}
