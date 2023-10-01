// import React, { Suspense, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls ,Sky} from '@react-three/drei';
// import Model2 from '../component/ModelComponent';
// // import { AmbientLight } from 'three';
// import { Typography, Box } from '@mui/material';
// import { Slider } from '@mui/material'; // Use a slider component from your UI library
// import { Panorama } from '../utils/Panorama';
// import Lights from '../component/Lights';



 

// export default function Threed(){
//    // import { Text } from 'drei'
// const [spotlightPositionX, setSpotlightPositionX] = useState(0);
// const [spotlightPositionY, setSpotlightPositionY] = useState(3);
// const [spotlightPositionZ, setSpotlightPositionZ] = useState(0);

//  // Function to handle X-axis slider change
//  const handleXSliderChange = (event, newValue) => {
//    setSpotlightPositionX(newValue);
//    console.log(spotlightPositionX)
//  };

//  // Function to handle Y-axis slider change
//  const handleYSliderChange = (event, newValue) => {
//    setSpotlightPositionY(newValue);
//  };

//  // Function to handle Z-axis slider change
//  const handleZSliderChange = (event, newValue) => {
//    setSpotlightPositionZ(newValue);
//  };
//   return (
//     <div>
//        <Box textAlign= 'center'>
//          <Typography variant="h2" gutterBottom >
//             Live Home
//          </Typography>

//        </Box>
       
         
//          <Canvas
//             camera={{ position: [2, 0, 12.25], fov: 15 }}
//             style={{
//                backgroundColor: '#111a21',
//                width: '100vw',
//                height: '100vh',
//             }}
//          >
//          <Sky/>
//          {/* <ambientLight intensity={1}  />
//          <directionalLight  intensity={1} />  */}
//         <Lights />

//          {/* <spotLight intensity={1} color="red"  position={[9, 8, -8.5]}/> */}
   
            
//             <Suspense fallback={null}>
//                {/* <Model2 position={[0, 0, 0]} /> /* highlight-line */}
//                {/* <Ground position={[0, 0, 0]} /> */}
               
//                 <Panorama/>
//             </Suspense>
//             <OrbitControls minDistance={0} // Set your desired minimum zoom level here
//       maxDistance={120} // Set your desired maximum zoom level here
//        />
//          </Canvas> 

//     </div>
//   )
// }
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { Typography, Box, ButtonGroup, Button } from '@mui/material';
import { Panorama } from '../utils/Panorama';
import Lights from '../component/Lights';

export default function Threed() {
  const [cameraPosition, setCameraPosition] = useState([2, 0, 12.25]);

  // Function to move the camera left
  const moveLeft = () => {
    setCameraPosition((prevPosition) => [prevPosition[0] - 100, prevPosition[1], prevPosition[2]]);
  };

  // Function to move the camera right
  const moveRight = () => {
    setCameraPosition((prevPosition) => [prevPosition[0] + 100, prevPosition[1], prevPosition[2]]);
  };

  // Function to move the camera up
  const moveUp = () => {
    setCameraPosition((prevPosition) => [prevPosition[0], prevPosition[1] + 100, prevPosition[2]]);
  };

  // Function to move the camera down
  const moveDown = () => {
    setCameraPosition((prevPosition) => [prevPosition[0], prevPosition[1] - 100, prevPosition[2]]);
  };

  return (
    <div>
      <Box textAlign="center">
        <Typography variant="h2" gutterBottom>
          Live Home
        </Typography>
      </Box>

      {/* Button group for camera movement */}
      <ButtonGroup variant="contained" color="primary" aria-label="camera movement">
        <Button onClick={moveLeft}>Left</Button>
        <Button onClick={moveRight}>Right</Button>
        <Button onClick={moveUp}>Up</Button>
        <Button onClick={moveDown}>Down</Button>
      </ButtonGroup>

      <Canvas
        camera={{ position: cameraPosition, fov: 15 }}
        style={{
          backgroundColor: '#111a21',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Sky />
        <Lights />

        <Suspense fallback={null}>
          <Panorama />
        </Suspense>
        <OrbitControls minDistance={0} maxDistance={120} />
      </Canvas>
    </div>
  );
}
