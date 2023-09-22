import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls ,Sky} from '@react-three/drei';
import Model from '../component/Model'; 
import Model2 from '../component/ModelComponent';
import Ground from '../component/Ground'
import { AmbientLight } from 'three';
import { Typography, Box } from '@mui/material';

export default function Threed(){
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
         <ambientLight />
         <directionalLight intensity={1} /> 
            
            
            <Suspense fallback={null}>
               <Model2 position={[0, 0, 0]} /> /* highlight-line */
               {/* <Ground position={[0, 0, 0]} /> */}
            </Suspense>
            <OrbitControls />
         </Canvas> 

    </div>
  )
}
