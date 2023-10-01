/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 Firstfloor_withwindows.glb -o FirstFloor.js 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Firstfloor_withwindows.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 7.19, 0]}>
        <mesh geometry={nodes.Plane008.geometry} material={nodes.Plane008.material} >
        <meshStandardMaterial color='brown' />
      </mesh> 
        <mesh geometry={nodes.Plane008_1.geometry} material={nodes.Plane008_1.material} >
        <meshStandardMaterial color='brown' />
      </mesh> 
      </group>
      <group position={[0, 8.122, 0]}>
        <mesh geometry={nodes.Plane010.geometry} material={nodes.Plane010.material} >
        <meshStandardMaterial color='orange' />
      </mesh>
        <mesh geometry={nodes.Plane010_1.geometry} material={nodes.Plane010_1.material} >
        <meshStandardMaterial color='orange' />
      </mesh>
      </group>
      <mesh geometry={nodes.Light_officeroom.geometry} material={nodes.Light_officeroom.material} position={[-8.72, 14.304, 5.418]} scale={0.408} />
      <mesh geometry={nodes.Light_bedroom2.geometry} material={nodes.Light_bedroom2.material} position={[-8.72, 14.304, -4.265]} scale={0.408} />
      <mesh geometry={nodes.Light_livingarea2.geometry} material={nodes.Light_livingarea2.material} position={[-0.255, 14.304, -4.265]} scale={0.408} />
      <mesh geometry={nodes.Light_storeroom.geometry} material={nodes.Light_storeroom.material} position={[8.648, 14.304, -6.983]} scale={0.408} />
      <mesh geometry={nodes.Light_bedroom3.geometry} material={nodes.Light_bedroom3.material} position={[8.648, 14.304, 2.045]} scale={0.408} />
      <mesh geometry={nodes.Front_glass.geometry} material={nodes.Front_glass.material} position={[0.313, 10.154, 0.9]} scale={[2.783, 2.564, 0.098]}  >
        <meshPhysicalMaterial 
        color="skyblue"
        transparent={true}
        opacity={0.5} // You can adjust the opacity to control the level of transparency
        roughness={0.1} // Adjust the roughness as needed
        metalness={0.0} // Set to 0 for non-metallic appearance
        />
      </mesh> 
      <mesh geometry={nodes.Cube004.geometry} material={nodes.Cube004.material} position={[-0.781, 7.409, -7.872]} scale={[4.395, 0.194, 1.377]} >
        <meshStandardMaterial color='brown' />
      </mesh> 
    </group>
  )
}

useGLTF.preload('/Firstfloor_withwindows.glb')