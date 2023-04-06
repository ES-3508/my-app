// import './App.css';
import Thermo from './component/Thermo';
import Bulb from './component/Bulb';
// import Model from './component/Model';

// function App() {
//   return (
//     <div className="App" style={{
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: '100vh',
//     }}>
//       <h1>Room 1</h1><br/>
//       <Thermo/>
//       <Bulb/>
//       <Model/>
      
//     </div>
//   );
// }

// export default App;




import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls ,Sky} from '@react-three/drei';
import Model from './component/Model'; /* highlight-line */
import { AmbientLight } from 'three';
// import Thermo from './component/Thermo';
// import Scene from './component/Scene';

export default function App() {
   const [button, setButton] = useState(false)

   function set(){
      setButton(true);
   }

   return (
    <div className='container' >
      {/* <Thermo/> */}
    <h1 style={{alignItems:Center}}>Smart Home Room 01 Digital Twin with Bulb Action</h1>
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
            <Model position={[0, 0, 0]} /> /* highlight-line */
         </Suspense>
         <OrbitControls />
      </Canvas>
      </div>
   );
}
