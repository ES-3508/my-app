/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 Ground_withwindows.glb -o GroundFloor.js 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Ground_withwindows.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={[12.184, 12.184, 9.722]}>
        <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} />
        <mesh geometry={nodes.Plane_1.geometry} material={nodes.Plane_1.material} />
        <mesh geometry={nodes.Plane_2.geometry} material={nodes.Plane_2.material} />
        <mesh geometry={nodes.Plane_3.geometry} material={nodes.Plane_3.material} />
      </group>
      <mesh geometry={nodes.Bedroom_1.geometry} material={nodes.Bedroom_1.material} position={[0, 0.022, 0]} scale={[12.184, 12.184, 9.722]} />
      <mesh geometry={nodes.Living_Room.geometry} material={nodes.Living_Room.material} position={[0, 0.042, 0]} scale={[12.184, 12.184, 9.722]} />
      <mesh geometry={nodes.Bathroom_1.geometry} material={nodes.Bathroom_1.material} position={[0, 0.025, 0]} scale={[12.184, 12.184, 9.722]} />
      <mesh geometry={nodes.Kitchen.geometry} material={nodes.Kitchen.material} position={[0, 0.015, 0]} scale={[12.184, 12.184, 9.722]} />
      <mesh geometry={nodes.Garage.geometry} material={nodes.Garage.material} position={[0, 0.007, 0]} scale={[12.184, 12.184, 9.722]} />
      <mesh geometry={nodes.Garden.geometry} material={nodes.Garden.material} position={[0, 0.009, 0]} scale={[12.184, 12.184, 9.722]} />
      <mesh geometry={nodes.Light_garage.geometry} material={nodes.Light_garage.material} position={[-8.72, 6.208, 5.418]} scale={0.408} />
      <mesh geometry={nodes.Light_garden.geometry} material={nodes.Light_garden.material} position={[-0.308, 6.208, 5.418]} scale={0.408} />
      <mesh geometry={nodes.Light_livingroom.geometry} material={nodes.Light_livingroom.material} position={[-0.308, 6.208, -7.618]} scale={0.408} />
      <mesh geometry={nodes.Light_bedroom1.geometry} material={nodes.Light_bedroom1.material} position={[-8.761, 6.208, -2.872]} scale={0.408} />
      <mesh geometry={nodes.Light_bathroom1.geometry} material={nodes.Light_bathroom1.material} position={[-8.761, 6.208, -8.114]} scale={0.408} />
      <mesh geometry={nodes.Light2_kitchen.geometry} material={nodes.Light2_kitchen.material} position={[8.754, 6.208, -6.326]} scale={0.408} />
      <mesh geometry={nodes.Light1_kitchen.geometry} material={nodes.Light1_kitchen.material} position={[8.754, 6.208, 2.574]} scale={0.408} />
      <mesh geometry={nodes.Fan_livingroom_.geometry} material={nodes.Fan_livingroom_.material} position={[0, 5.246, -4.586]} scale={[0.523, 0.187, 0.523]} />
      <mesh geometry={nodes.Light2_livingroom.geometry} material={nodes.Light2_livingroom.material} position={[-0.308, 6.208, -1.16]} scale={0.408} />
      <mesh geometry={nodes.Fan_holder_livingroom_.geometry} material={nodes.Fan_holder_livingroom_.material} position={[0, 5.246, -4.586]} scale={[0.523, 0.187, 0.523]} />
      <group scale={[12.184, 12.184, 9.722]}>
        <mesh geometry={nodes.Plane007.geometry} material={nodes.Plane007.material} />
        <mesh geometry={nodes.Plane007_1.geometry} material={nodes.Plane007_1.material} />
        <mesh geometry={nodes.Plane007_2.geometry} material={nodes.Plane007_2.material} />
        <mesh geometry={nodes.Plane007_3.geometry} material={nodes.Plane007_3.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/Ground_withwindows.glb')
