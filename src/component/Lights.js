
import * as THREE from 'three'
import { useControls } from 'leva'
import { useRef } from 'react'
export default function Lights() {
    const ambientRef = useRef()
    const directionalRef= useRef()
    const directionalRef2 = useRef()
    const directionalRef3 = useRef()
    const directionalRef4 = useRef()
    const pointRef = useRef()
    const spotRef = useRef()
  
    useControls('Ambient Light', {
      visible: {
        value: true,
        onChange: (v) => {
          ambientRef.current.visible = v
        },
      },
      color: {
        value: 'white',
        onChange: (v) => {
          ambientRef.current.color = new THREE.Color(v)
        },
      },
    })
  
    useControls('Directional Light', {
      visible: {
        value: true,
        onChange: (v) => {
          directionalRef.current.visible = v
        },
      },
      position: {
        x: 5,
        y: 0,
        z: 0,
        onChange: (v) => {
          directionalRef.current.position.copy(v)
        },
      },
      color: {
        value: 'white',
        onChange: (v) => {
          directionalRef.current.color = new THREE.Color(v)
        },
      },
      intensity: {
        value: 0.5,
        onChange: (v) => {
          spotRef.current.intensity = v;
        },
      },
    })

    useControls('Directional Light2', {
        visible: {
          value: true,
          onChange: (v) => {
            directionalRef2.current.visible = v
          },
        },
        position: {
          x: -5,
          y: 0,
          z: 0,
          onChange: (v) => {
            directionalRef2.current.position.copy(v)
          },
          
        },
        color: {
          value: 'white',
          onChange: (v) => {
            directionalRef2.current.color = new THREE.Color(v)
          },
        },
        intensity: {
            value: 0.5,
            onChange: (v) => {
              directionalRef2.current.intensity = v;
            },
          },
      })

      useControls('Directional Light3', {
        visible: {
          value: true,
          onChange: (v) => {
            directionalRef3.current.visible = v
          },
        },
        position: {
          x: 0,
          y: 0,
          z: -5,
          onChange: (v) => {
            directionalRef3.current.position.copy(v)
          },
        },
        color: {
          value: 'white',
          onChange: (v) => {
            directionalRef3.current.color = new THREE.Color(v)
          },
        },
        intensity: {
            value: 0.5,
            onChange: (v) => {
              directionalRef3.current.intensity = v;
            },
          },
      })

      useControls('Directional Light4', {
        visible: {
          value: true,
          onChange: (v) => {
            directionalRef4.current.visible = v
          },
        },
        position: {
          x: 0,
          y: 0,
          z: 5,
          onChange: (v) => {
            directionalRef4.current.position.copy(v)
          },
        },
        color: {
          value: 'white',
          onChange: (v) => {
            directionalRef.current.color = new THREE.Color(v)
          },
        },
        intensity: {
            value: 0.5,
            onChange: (v) => {
              directionalRef4.current.intensity = v;
            },
          },
      })
  
    useControls('Point Light', {
      visible: {
        value: false,
        onChange: (v) => {
          pointRef.current.visible = v
        },
      },
      position: {
        x: -8,
        y: 8,
        z: -1.5,
        onChange: (v) => {
          pointRef.current.position.copy(v)
        },
      },
      color: {
        value: 'white',
        onChange: (v) => {
          pointRef.current.color = new THREE.Color(v)
        },
      },
    })
  
    useControls('Spot Light', {
      visible: {
        value: false,
        onChange: (v) => {
          spotRef.current.visible = v
        },
      },
      position: {
        x: -8,
        y: 8,
        z: -1.5,
        onChange: (v) => {
          spotRef.current.position.copy(v)
        },
      },
      color: {
        value: 'white',
        onChange: (v) => {
          spotRef.current.color = new THREE.Color(v)
        },
      },
      intensity: {
        value: 0.5,
        onChange: (v) => {
          spotRef.current.intensity = v;
        },
      },
    })
  
    return (
      <>
        <ambientLight ref={ambientRef} />
        <directionalLight  ref={directionalRef} />
        <directionalLight  ref={directionalRef2} />
        <directionalLight ref={directionalRef3} />
        <directionalLight  ref={directionalRef4} />
        <pointLight intensity={0.1} decay={0.1} ref={pointRef}  />
        <spotLight ref={spotRef} />

      </>
    )
  }